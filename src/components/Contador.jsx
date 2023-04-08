import React, { useState } from "react";
import style from "../components/Contador.module.css";
import CountUp from "react-countup";

const Contador = ({
  end = 100,
  duration = 1,
  title = "Contador",
  width = "200px",
  height = "200px",
  backgroundColor = "white",
  titleColor = "black",
  counterColor = "black",
  sufijo = "",
  sufijoColor = "black",
  decimals=0
}) => {
  return (
    <div
      className={style.container}
      style={{ width: width, height: height, backgroundColor: backgroundColor }}
    >
      <div className={style.title} style={{ color: titleColor }}>
        {title}
      </div>
      <CountUp
        end={end}
        duration={duration}
        decimals={decimals}
        decimal="."

        style={{ color: counterColor, fontSize: "60px", fontWeight:"700"}}
      />
      <div className={style.sufijo} style={{ color: sufijoColor }}>
        {sufijo}
      </div>
    </div>
  );
};

export default Contador;
