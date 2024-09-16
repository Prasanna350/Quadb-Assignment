import {useState,useEffect} from "react"
import "./index.css"

const Header = () => {
    const [time,setTime] = useState(60)

    useEffect(() => {
        const uniqueId = setInterval(() => {
            setTime(prevState => {
                if (prevState<=0){
                     return 60
                }
                return prevState-1
            })
        },1000)
        
    },[])

    

    return(
        <div className = "header-bg">
            <h1 className = "header-name">HODLINFO</h1>
            <div className="drop-downs-div">
               <select className = "dropdown-styling">
                <option value="INR" selected>INR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option> 
            </select>
            <select className = "dropdown-styling">
                <option value="BTC" selected>BTC</option>
                <option value="ETH">ETH</option>
                <option value="LTC">LTC</option>
            </select> 
            </div>
            <div className="timer-div">
                <p className="timer-ele">{time}</p>
                <a href="https://github.com/Prasanna350" target="_blank"><button className = "connect-button">Connect</button></a>
            </div>
        </div>
    )
}

export default Header