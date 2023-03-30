import React from "react";
import { Chart } from "react-google-charts";

const options = {
  hAxis: {
    title: "",
  },
  vAxis: {
    title: "",
    textPosition: "none",
  },
  series: {
    0: { color: "#FF1800", width: "80%", type: "bars" },
    1: { color: "#222222", width: "80%", type: "bars" },
  },
  chartArea: { width: "80%" },
  legend: { position: "none" },
  title: "",
  animation: {
    startup: true,
    duration: 1000,
    easing: "inAndOut",
  },
  tooltip: {
    isHtml: true,
    cssClassNames: {
      tooltip: "my-tooltip-style",
    },
  },
};

const data = [
  ["Género", "Mujeres", "Hombres"],
  ["13-17", 1000, 1500],
  ["18-24", 1000, 1500],
  ["25-34", 1200, 1700],
  ["35-44", 900, 1200],
  ["45-54", 600, 800],
  ["55-64", 400, 500],
  ["65+", 400, 500],
];

const BarsChart = () => {
  return (
    <Chart
      chartType="ColumnChart"
      data={data}
      options={options}
      graph_id="ColumnChart"
      width="100%"
      height="400px"
      legend_toggle
    />
  );
};

export default BarsChart;
