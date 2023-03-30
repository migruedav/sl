import React from "react";
import Chart from "react-google-charts";

const DonutChart = () => {
  const data = [
    ["Género", "Usuarios"],
    ["Hombres", 84474],
    ["Mujeres", 147907],
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
    colors: [ "#222222","#FF1800"],
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
