import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value) // return an array
    const totalMaximum = Math.max(...dataPointValues); // we use spread operator to pull out the values inside the dataPointValues array

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    label={dataPoint.label}
                    maxValue={totalMaximum}
                />
            ))}
        </div>
    )
}

export default Chart