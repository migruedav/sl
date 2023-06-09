import React, { useState, useEffect } from "react";
import "./Trends.css";
import LineChart from "../components/LineChart";
import GeoChart from "../components/GeoChart";
import InfoButton from "../components/InfoButton";
import { ThreeBody } from "@uiball/loaders";

export default function Trends() {
  // VARIABLES

  const [dias, setDias] = useState(60);
  const [keywords, setKeywords] = useState(["formica"]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // FUNCIONES


  const fetchData = async (dias, keywords) => {
    try {
      setLoading(true);
      const url = `https://fastapi-production-b90c.up.railway.app/trends2?days=${dias}&keywords=${keywords}`;
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
    setKeywords(value);
  };

  useEffect(() => {
    fetchData(dias, keywords);
  }, []);

  // RETURN
  return (
    <div className="content">
      <div className="left-container">
        <div className="tituloizq">
          <h1 className="titulo">TRENDS</h1>
          <hr className="divider" />
        </div>

        <p>Keywords</p>
        <input
          className="trends-input"
          type="text"
          value={keywords}
          onChange={handleInputChange}
        />
        <p>Score de los últimos</p>
        <select value={dias} onChange={(e) => setDias(e.target.value)}>
          <option value="15">15 días</option>
          <option value="30">30 días</option>
          <option value="60">60 días</option>
          <option value="120">120 días</option>
          <option value="180">180 días</option>
          <option value="365">365 días</option>
        </select>

        <button
          className="fetch-button"
          onClick={() => fetchData(dias, keywords)}
          disabled={loading}
          style={{ backgroundColor: loading ? "#222222" : "red" }}
        >
          {loading ? "Cargando..." : "Realizar Búsqueda"}
        </button>
      </div>

      <div className="right-container-trends">
        <InfoButton text="Los valores del 0 al 100 muestran el interés relativo de un término de búsqueda en Google. Un valor de 0 significa que no hay suficientes datos disponibles, mientras que un valor de 100 indica que el término está en su punto máximo de popularidad en el periodo de tiempo elegido. " />
        {!loading ? (
          <>
            <LineChart className="line-chart" data={data.interest_over_time} />
            <div className="divider2"></div>
            <GeoChart data={data.interest_by_region} />
          </>
        ) : (
          <div className="loader-container-trends">
            <ThreeBody size={60} speed={1.1} color="red" />
          </div>
        )}
      </div>
    </div>
  );
}
