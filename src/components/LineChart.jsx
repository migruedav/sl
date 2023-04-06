import React from "react";
import { Chart } from "react-google-charts";
import "./LineChart.css";

function LineChart(props) {
  const chartData = props.data;
  const options = {
    title: "",
    curveType: "function",
    legend: { position: "none" },
    backgroundColor: "red",
    chartArea: { width: "90%", height: "100%" },
    series: {
      0: { color: "white", lineWidth: 3, pointSize: 8 },
      1: { color: "yellow", lineWidth: 3, pointSize: 8 },
      2: { color: "green", lineWidth: 3, pointSize: 8 },
      3: { color: "orange", lineWidth: 3, pointSize: 8 },
      4: { color: "blue", lineWidth: 3, pointSize: 8 },
    },
    hAxis: { textPosition: "none" },
    vAxis: { textPosition: "none" },
    tooltip: {
      isHtml: true,
    },
    focusTarget: "category",
    width: "100%",
    height: "500px",
  };

  return <Chart chartType="LineChart" data={chartData} options={options} />;
}

export default LineChart;
