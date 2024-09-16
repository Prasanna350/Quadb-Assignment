import "./index.css"
/*
<p className = "each-col">#</p>
            <p className = "each-col">Name</p>
            <p className = "each-col">Last Traded Price</p>
            <p className = "each-col">Buy / Sell Price</p>
            <p className = "each-col">Volume</p>
            <p className = "each-col">Base unit</p>
            */
const TableHeader = () => {
    return(
        <div className = "table-header-bg">
            <p className = "each-col">#</p>
            <p className = "each-col">Name</p>
            <p className = "each-col">Last Traded Price</p>
            <p className = "each-col">Buy / Sell Price</p>
            <p className = "each-col">Volume</p>
            <p className = "each-col">Base unit</p>
        </div>
    )
}

export default TableHeader