import {useEffect,useState} from "react";
import "./index.css"
import TableHeader from "../TableHeader"
import TableRow from "../TableRow"



const TableContainer = () => {
    const [tableData,setTableData] = useState([])



    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch("https://quadb-assignment-backend.vercel.app/details")
            const data = await response.json()
            setTableData(data);
        }
        fetchData();
    })

    return(
        <div className = "table-container">
            <TableHeader/>
            {console.log(tableData)}
            {
                tableData.map(eachObject => <TableRow eachObject = {eachObject} key = {eachObject.id}/>)
            }
            
        </div>
    )
}

export default TableContainer
