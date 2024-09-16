const express= require("express")
const sqlite3= require("sqlite3")
const {open} = require("sqlite")
const path = require("path")
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors())
let db = null;
const dbPath = path.join(__dirname,"./database/server.db")

const initializeDbServer = async() => {
    try{
        db = await open({
            filename : dbPath,
            driver : sqlite3.Database
        })
        app.listen(5004,()=>{
            console.log("Server is running at http://localhost:5004/")
        })
        const result = await db.all(`select * from hodlinfo`);
        if (!result.length){
            await insertData()
        }
    }catch(error){
        console.log(`Error : ${error.message}`)
    }
}

const insertData = async() => {
    try{
        const response = await fetch("https://api.wazirx.com/api/v2/tickers")
        const data = await response.json();
        const keysArray = Object.keys(data)
        const tenKeys = keysArray.slice(0,10);
        let count = 0
        tenKeys.map(async(eachkey) => {
            count = count + 1
            const eachObject = data[eachkey];
            const {name,last,buy,sell,volume,base_unit} = eachObject;
            const insertDataQuery = `
                INSERT INTO hodlinfo (id, name, last, buy, sell, volume, baseUnit) 
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `;

            await db.run(insertDataQuery, [
                count,
                name,
                parseInt(last),
                parseInt(buy),
                parseInt(sell),
                parseInt(volume),
                base_unit
            ]);
        })
    }catch(error){
        console.log(`Error : ${error.message}`)
    }
}


initializeDbServer();

app.get("/details",async(request,response) => {
    try{
        const getDataQuery = `SELECT * FROM hodlinfo ORDER BY id`
        const result = await db.all(getDataQuery);
        response.send(result)
    }catch(error){
        response.send(`Error : ${error.message}`)
    }
})