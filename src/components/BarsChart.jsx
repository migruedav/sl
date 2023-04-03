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
  chartArea: { width: "80%"},
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


const BarsChart = (props) => {
  return (
    <Chart
      chartType="ColumnChart"
      data={props.data}
      options={options}
      graph_id="ColumnChart"
      width="100%"
      height="400px"
      legend_toggle
    />
  );
};

export default BarsChart;
