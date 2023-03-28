import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import "./GaugeChart.css";

const GaugeChart = (props) => {
  const [loading, setLoading] = useState(true);
  const data = [
    ["Label", "Value"],
    ["Sentiment", parseInt(props.sentiment.total_str)],
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
    redColor: "#222222",
    yellowColor: "#4F4F4F",
    greenColor: "#FF0000",
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <Chart
          chartType="Gauge"
          data={data}
          options={options}
          width="100%"
          height="400px"
        />
      )}
      <div className="container-indicadores">
        {loading ? (
          <p></p>
        ) : (
          <div className="indicador">
            La percepción sobre tu marca de los últimos {props.dias} días es{" "}
            <br />
            {props.sentiment.percepcion}
          </div>
        )}
      </div>
    </div>
  );
};

export default GaugeChart;
