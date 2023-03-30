import React, { useState, useEffect } from "react";
import "./Metrics.css";

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
      </div>
      <div className="right-container">
        <iframe
          src="https://makeawish.org.mx/reporte/"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
