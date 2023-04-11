import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MyWordCloud from "../components/WordCloud";
import InfoButton from "../components/InfoButton";

export default function MyPage() {
  const [dias, setDias] = useState(365);
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("formica");
  const [tendencia, setTendencia] = useState("tiempo");
  const [loading, setLoading] = useState(false);

  // FUNCIONES

  const handleButtonClick = (e, state, setState) => {
    e.preventDefault();
    setState(!state);
  };

  const fetchData = async (dias) => {
    try {
      setLoading(true);
      const url = `https://fastapi-production-b90c.up.railway.app/wordcloud?days=${dias}&keyword=${keyword}`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setKeyword(value);
  };

  useEffect(() => {
    fetchData(dias);
  }, []);
  return (
    <div className="content">
      <div className="left-container">
        <div className="tituloizq">
          <h1 className="titulo">KEYWORDS</h1>
          <hr className="divider" />
        </div>

        <input
          className="trends-input"
          type="text"
          value={keyword}
          onChange={handleInputChange}
        />
        <p>Keywords de los últimos</p>
        <select value={dias} onChange={(e) => setDias(e.target.value)}>
          <option value="7">7 días</option>
          <option value="15">15 días</option>
          <option value="30">30 días</option>
          <option value="60">60 días</option>
          <option value="120">120 días</option>
          <option value="180">180 días</option>
          <option value="365">365 días</option>
        </select>

        <button
          className="fetch-button"
          onClick={() => fetchData(dias)}
          disabled={loading}
          style={{ backgroundColor: loading ? "#222222" : "red" }}
        >
          {loading ? "Cargando..." : "Realizar Búsqueda"}
        </button>
      </div>
      <div className="right-container">
        <InfoButton text="Se muestran los términos más populares relacionados con la palabra Formica en las búsquedas de Google en el periodo de tiempo elegido." />
        <MyWordCloud keywords={data} />
      </div>
    </div>
  );
}
