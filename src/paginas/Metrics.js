import React, { useState, useEffect } from "react";
import "./Metrics.css";
import Contador from "../components/Contador";
import LineChart from"../components/LineChart"

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
          <h1 className="titulo">METRICS</h1>
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
        <p>Métricas de los últimos</p>
        <select value={dias} onChange={(e) => setDias(e.target.value)}>
          <option value="7">7 días</option>
          <option value="15">15 días</option>
          <option value="30">30 días</option>
          <option value="60">60 días</option>
          <option value="120">120 días</option>
          <option value="180">180 días</option>
          <option value="360">360 días</option>
        </select>
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
        <div className="all-metrics-container">
          <div className="followers-container">
            <Contador
              width="300px"
              end={209875}
              title="Facebook"
              backgroundColor="red"
              counterColor="white"
              sufijo="Followers"
              sufijoColor="#222222"
              titleColor="#222222"
            />
            <Contador
              width="300px"
              end={32139}
              title="Instagram"
              backgroundColor="red"
              counterColor="white"
              sufijo="Followers"
              sufijoColor="#222222"
              titleColor="#222222"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
