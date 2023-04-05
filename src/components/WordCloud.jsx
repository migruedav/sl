import React from "react";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const options = {
  colors: ['#ff0000', '#e60000', '#cc0000', '#b30000', '#990000', '#800000'],
  enableTooltip: true,
  deterministic: true,
  fontFamily: "impact",
  fontSizes: [10, 80],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 0],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

function MyWordCloud(params) {
  return (
    <div>
      <div className="word-cloud" style={{ height: 500, width: 900, marginTop:0 }}>
        <ReactWordcloud options={options} words={params.keywords} />
      </div>
    </div>
  );
}

export default MyWordCloud;
