//<p>{count}</p>
//<p>{name}</p>
//<p>{last}</p>
//<p>{buy} / {sell}</p>
//<p>{volume}</p>
//<p>{baseUnit}</p>

import "./index.css"

const TableRow = (props) => {
    const {eachObject} = props
    const {name,last,buy,sell,volume,baseUnit,id} = eachObject
    return(
        <div className = "table-row-bg">
            <p className = "each-col">{id}</p>
            <p className = "each-col">{name}</p>
            <p className = "each-col">{last}</p>
            <p className = "each-col">{buy} / {sell}</p>
            <p className = "each-col">{volume}</p>
            <p className = "each-col">{baseUnit}</p>
        </div>
    )

}

export default TableRow