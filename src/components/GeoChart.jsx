import React from "react";
import { Chart } from "react-google-charts";

function GeoChart(props) {
  const chartData = props.data;

  const options = {
    region: "MX",
    resolution: "provinces",
    colorAxis: {
      colors: [
        "#ff0000",
        "#e60000",
        "#cc0000",
        "#b30000",
        "#990000",
        "#800000",
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
