import React, { useState, useEffect } from "react";
import GaugeChart from "../components/GaugeChart";
import "./Sentiment.css";

export default function Mentions() {
  // VARIABLES

  const [dias, setDias] = useState(120);
  const [facebook, setFacebook] = useState(true);
  const [instagram, setInstagram] = useState(true);
  const [sentiment, setSentiment] = useState([]);
  const [loading, setLoading] = useState(false);

  // FUNCIONES

  const handleButtonClick = (e, state, setState) => {
    e.preventDefault();
    setState(!state);
  };

  const fetchData = async (dias, facebook, instagram) => {
    try {
      setLoading(true);
      const url = `https://fastapi-production-b90c.up.railway.app/sentiment?days=${dias}&facebook=${facebook}&instagram=${instagram}`;
      const response = await fetch(url);
      const data = await response.json();
      setSentiment(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(dias, facebook, instagram);
  }, []);
  // RETURN∫
  return (
    <div className="content">
      <div className="left-container">
        <div className="tituloizq">
          <h1 className="titulo">SENTIMENT</h1>
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

        <p>Comentarios de los últimos</p>
        <select value={dias} onChange={(e) => setDias(e.target.value)}>
          <option value="30">30 días</option>
          <option value="60">60 días</option>
          <option value="120">120 días</option>
          <option value="180">180 días</option>
          <option value="360">360 días</option>
        </select>
        <button
          className="fetch-button"
          onClick={() =>
            fetchData(dias, facebook, instagram)
          }
          disabled={loading}
          style={{ backgroundColor: loading ? "#222222" : "red" }}
        >
          {loading ? "Cargando..." : "Realizar Búsqueda"}
        </button>
      </div>

      <div className="right-container">
        <div className="gauge">
          <GaugeChart className="gauge"  sentiment={sentiment} dias={dias}/>
        </div>
      </div>
    </div>
  );
}
