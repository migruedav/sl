import React from "react";
import { Chart } from "react-google-charts";
import "./LineChart.css";

function LineChart({data,backgroundColor='red',lineColor=['white','yellow','green','orange','blue'],title="", width="100%", height="500px", type="LineChart"}) {
  const chartData = data;
  const options = {
    title:title,
    curveType: "function",
    legend: { position: "none" },
    backgroundColor: backgroundColor,
    chartArea: { width: "90%", height: "90%" },
    series: {
      0: { color: lineColor[0], lineWidth: 3, pointSize: 8 },
      1: { color: lineColor[1], lineWidth: 3, pointSize: 8 },
      2: { color: lineColor[2], lineWidth: 3, pointSize: 8 },
      3: { color: lineColor[3], lineWidth: 3, pointSize: 8 },
      4: { color: lineColor[4], lineWidth: 3, pointSize: 8 },
      5: { color: lineColor[5], lineWidth: 3, pointSize: 8 },
      6: { color: lineColor[6], lineWidth: 3, pointSize: 8 },
    },
    hAxis: { textPosition: "none" },
    vAxis: { textPosition: "none" },
    tooltip: {
      isHtml: true,
    },
    focusTarget: "category",
    width: width,
    height: height,
  };


  return <Chart chartType={type} data={chartData} options={options} />;
}

export default LineChart;
