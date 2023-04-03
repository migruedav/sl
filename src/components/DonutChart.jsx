import React from "react";
import Chart from "react-google-charts";

const DonutChart = (props) => {
  console.log(props);
  const data = [
    ["Género", "Usuarios"],
    ["Hombres", props.data.male],
    ["Mujeres", props.data.female],
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
    colors: props.colors,
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
