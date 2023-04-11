import { Chart } from "react-google-charts";
import "./GaugeChart.css";

const GaugeChart = (props) => {
  const data = [
    ["Label", "Value"],
    ["Sentiment", props.loading ? 0 : parseInt(props.sentiment.total_str)],
  ];

  const options = {
    redFrom: 0,
    redTo: 33,
    yellowFrom: 34,
    yellowTo: 66,
    greenFrom: 67,
    greenTo: 100,
    minorTicks: 5,
    animation: { duration: 400 },
  
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chart
        chartType="Gauge"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
      <div className="container-indicadores">
        <div className="indicador">
          La percepción sobre tu marca de los últimos {props.dias} días es{" "}
          <br />
          {props.sentiment.percepcion}
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;