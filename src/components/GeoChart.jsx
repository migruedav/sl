import React from "react";
import { Chart } from "react-google-charts";

function GeoChart(props) {
  const chartData = props.data;

  const options = {
    region: "MX",
    resolution: "provinces",
    colorAxis: {
      colors: [
        "#ff0005",
        "#4c0001"
      ],
    },
    tooltip: {
      isHtml: true, // Establece el tooltip como HTML
    },
  };

  return (
    <Chart
      chartType="GeoChart"
      data={chartData}
      options={options}
      width="90%"
    />
  );
}

export default GeoChart;
