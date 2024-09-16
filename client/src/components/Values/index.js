import "./index.css"

const Values = () => {
    return(
        <div className = "values-card-bg">
            <div className = "values-card">
                <p className = "values-percentages">0.1 %</p>
                <p className = "values-name">5 Mins</p>
            </div>
            <div className = "values-card">
                <p className = "values-percentages">0.96 %</p>
                <p className = "values-name">1 Hour</p>
            </div>

            <div className = "values-card-1">
                <p className = "values-name values-mid-head-top">Best Price to Trade</p>
                <h1 className = "values-mid-head-value">₹ 26,56,210</h1>
                <p className = "values-name">Average BTC/INR net price including commission</p>
            </div>

            <div className = "values-card">
                <p className = "values-percentages">2.73 %</p>
                <p className = "values-name">1 Day</p>
            </div>
            <div className = "values-card">
                <p className = "values-percentages">7.51 %</p>
                <p className = "values-name">7 Days</p>
            </div>
        </div>
    )
}

export default Values