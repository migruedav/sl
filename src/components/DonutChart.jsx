import React from "react";
import Chart from "react-google-charts";

const DonutChart = () => {
  const data = [
    ["Género", "Usuarios"],
    ["Hombres", 45],
    ["Mujeres", 55],
  ];

  const options = {
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
    colors: ["#FF1800", "#222222"],
    pieSliceText: "none",
    legend: "none",
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="400px"
      height="400px"
    />
  );
};

export default DonutChart;
