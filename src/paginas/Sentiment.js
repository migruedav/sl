import React, { useState, useEffect } from "react";
import GaugeChart from "../components/GaugeChart";
import "./Sentiment.css";

export default function Mentions() {
  // VARIABLES

  const [dias, setDias] = useState(120);
  const [cantidad, setCantidad] = useState(20);
  const [facebook, setFacebook] = useState(true);
  const [instagram, setInstagram] = useState(true);
  const [sortedby, setSortedby] = useState("likes");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  // FUNCIONES

  const handleButtonClick = (e, state, setState) => {
    e.preventDefault();
    setState(!state);
  };

  const fetchData = async (days, cantidad, facebook, instagram, sortedby) => {
    try {
      setLoading(true);
      const url = ""; // `https://fastapi-production-b90c.up.railway.app/mentions2?days=${days}&cantidad=${cantidad}&facebook=${facebook}&instagram=${instagram}&sortedby=${sortedby}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCards(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(dias, cantidad, facebook, instagram, sortedby);
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
            fetchData(dias, cantidad, facebook, instagram, sortedby)
          }
          disabled={loading}
          style={{ backgroundColor: loading ? "#222222" : "red" }}
        >
          {loading ? "Cargando..." : "Realizar Búsqueda"}
        </button>
      </div>

      <div className="right-container">
        <div className="gauge">
          <GaugeChart className="gauge" />
        </div>
      </div>
    </div>
  );
}
