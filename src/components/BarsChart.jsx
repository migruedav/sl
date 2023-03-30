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

const data = [['Edad', 'Femenino', 'Masculino'],
['13-17', 12, 10],
['18-24', 315, 310],
['25-34', 4454, 3949],
['35-44', 5588, 5196],
['45-54', 3139, 2347],
['55-64', 831, 450],
['65+', 256, 158]]

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
