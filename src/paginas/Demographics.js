import React, { useState, useEffect } from "react";
import "./Demographics.css";
import DonutChart from "../components/DonutChart";
import BarsChart from "../components/BarsChart";
import Tabla from "../components/Tabla";

export default function Demographics() {
  const [dias, setDias] = useState(30);
  const [facebook, setFacebook] = useState(true);
  const [instagram, setInstagram] = useState(true);
  const [loading, setLoading] = useState(false);

  // FUNCIONES

  const handleButtonClick = (e, state, setState) => {
    e.preventDefault();
    setState(!state);
  };

  return (
    <div className="content">
      <div className="left-container">
        <div className="tituloizq">
          <h1 className="titulo">DEMOGRAPHICS</h1>
          <hr className="divider" />
        </div>
        <button
          className="button"
          onClick={(e) => handleButtonClick(e, facebook, setFacebook)}
          style={{
            backgroundColor: facebook ? "red" : "#222222",
          }}
        >
          Facebook
        </button>
        <button
          className="button"
          onClick={(e) => handleButtonClick(e, instagram, setInstagram)}
          style={{
            backgroundColor: instagram ? "red" : "#222222",
          }}
        >
          Instagram
        </button>
        <button
          className="fetch-button"
          /*onClick={() =>
            fetchData(dias, facebook, instagram)
          }*/
          disabled={loading}
          style={{ backgroundColor: loading ? "#222222" : "red" }}
        >
          {loading ? "Cargando..." : "Realizar Búsqueda"}
        </button>
      </div>
      <div className="right-container">
        <div className="charts-container">
          <div className="male-chart-container">
            <DonutChart className="male-chart" style={{ marginTop: 0 }} />
            <img
              className="male-img"
              src="https://cdn.midjourney.com/72702343-ac6c-4ff1-8a4a-591e50953993/grid_0.png"
              alt=""
            />
          </div>
          <div className="female-chart-container">
            <DonutChart className="male-chart" />
            <img
              className="female-img"
              src="https://cdn.midjourney.com/2fafe310-a5b5-499c-bb7e-1400e016771f/grid_0.png"
              alt=""
            />
          </div>
        </div>
        <BarsChart />
        <div>
          <Tabla />
        </div>
      </div>
    </div>
  );
}
