import React, { useState, useEffect } from "react";
import "./Trends.css";
import LineChart from "../components/LineChart";
import GeoChart from "../components/GeoChart";
import { Line } from "react-chartjs-2";

export default function Trends() {
  // VARIABLES

  const [dias, setDias] = useState(30);
  const [keywords, setKeywords] = useState(["Formica"]);
  const [data, setData] = useState([]);
  const [tendencia, setTendencia] = useState("tiempo");
  const [loading, setLoading] = useState(false);

  // FUNCIONES

  const handleButtonClick = (e, state, setState) => {
    e.preventDefault();
    setState(!state);
  };

  const fetchData = async (dias, keywords) => {
    try {
      setLoading(true);
      const url = `https://fastapi-production-b90c.up.railway.app/trends?days=${dias}&keywords=${keywords}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
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

  console.log(keywords);

  // RETURN

  return (
    <div className="content">
      <div className="left-container">
        <div className="tituloizq">
          <h1 className="titulo">TRENDS</h1>
          <hr className="divider" />
        </div>

        <p>Keywords</p>
        <input type="text" value={keywords} onChange={handleInputChange} />
        <p>Score de los últimos</p>
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
          onClick={() => fetchData(dias, keywords)}
          disabled={loading}
          style={{ backgroundColor: loading ? "#222222" : "red" }}
        >
          {loading ? "Cargando..." : "Realizar Búsqueda"}
        </button>
      </div>

      <div className="right-container-trends">
        <LineChart className="line-chart" />
        <GeoChart />
      </div>
    </div>
  );
}
