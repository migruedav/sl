import { Chart } from "react-google-charts";
import './GaugeChart.css'

function GaugeChart() {

  const data = [
    ['Label', 'Value'],
    ['Sentiment', 77],
  ];

  const options = {
    redFrom: 0,
    redTo: 33,
    yellowFrom: 34,
    yellowTo: 66,
    greenFrom:67,
    greenTo:100,
    minorTicks: 5,
    animation:{duration:400},
    redColor:'#222222',
    yellowColor:'#4F4F4F',
    greenColor:'#FF0000'
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Chart
        chartType="Gauge"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
}

export default GaugeChart;
