import React, { useState, useEffect } from "react";
import GaugeChart from "../components/GaugeChart";
import "./Sentiment.css";
import InfoButton from "../components/InfoButton";

export default function Sentiment() {
  // VARIABLES
  const [dias, setDias] = useState(120);
  const [facebook, setFacebook] = useState(true);
  const [instagram, setInstagram] = useState(true);
  const [sentiment, setSentiment] = useState([]);
  const [loading, setLoading] = useState(false);

  // FUNCIONES
  const handleButtonClick = (e, currentState, setState) => {
    e.preventDefault();
    setState(!currentState);
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
  }, [dias, facebook, instagram]);

  // RETURN
  return (
    <div className="content">
      <div className="left-container">
        <div className="title-left">
          <h1 className="titulo">SENTIMENT</h1>
          <hr className="divider" />
        </div>
        <button
          className="facebook-toggle"
          onClick={(e) => handleButtonClick(e, facebook, setFacebook)}
          style={{
            backgroundColor: facebook ? "red" : "#222222",
          }}
        >
          Facebook
        </button>
        <button
          className="instagram-toggle"
          onClick={(e) => handleButtonClick(e, instagram, setInstagram)}
          style={{
            backgroundColor: instagram ? "red" : "#222222",
          }}
        >
          Instagram
        </button>
        <p>Comentarios de los últimos</p>
        <select value={dias} onChange={(e) => setDias(e.target.value)}>
          <option key="30" value="30">
            30 días
          </option>
          <option key="60" value="60">
            60 días
          </option>
          <option key="120" value="120">
            120 días
          </option>
          <option key="180" value="180">
            180 días
          </option>
          <option key="365" value="365">
            365 días
          </option>
        </select>
        <button
          className="fetch-button"
          onClick={() => fetchData(dias, facebook, instagram)}
          disabled={loading}
          style={{ backgroundColor: loading ? "#222222" : "red" }}
          title="Realizar búsqueda en Facebook e Instagram"
        >
          {loading ? "Cargando..." : "Realizar búsqueda"}
        </button>
      </div>
      <div className="right-container">
        <InfoButton text="El Score de Sentimiento se refiere al grado de positividad o negatividad del texto obtenido de los comentarios en las publicaciones de redes sociales en el periodo de tiempo elegido y puede variar entre 0 y 100, donde 0 indica una polaridad completamente negativa y 100 indica una polaridad completamente positiva. "/>
        <div className="gauge">
          <div className="divider-sentiment"></div>
          <GaugeChart className="gauge" sentiment={sentiment} loading={loading} dias={dias} />
        </div>
      </div>
    </div>
  );
}
