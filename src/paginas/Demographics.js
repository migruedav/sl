import React, { useState, useEffect } from "react";
import "./Demographics.css";
import DonutChart from "../components/DonutChart";
import BarsChart from "../components/BarsChart";
import Tabla from "../components/Tabla";
import { ThreeBody } from "@uiball/loaders";

export default function Demographics() {
  const [facebook, setFacebook] = useState(true);
  const [instagram, setInstagram] = useState(true);
  const [ageGender, setAgeGender] = useState();
  const [gender, setGender] = useState({ male: 0, female: 0 });
  const [tableData, setTableData] = useState();
  const [loading, setLoading] = useState(true);

  // FUNCIONES

  const handleButtonClick = (e, state, setState) => {
    e.preventDefault();
    setState(!state);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const url = `https://fastapi-production-b90c.up.railway.app/demographicsagegender?facebook=${facebook}&instagram=${instagram}`;
      const response = await fetch(url);
      const data = await response.json();
      setAgeGender(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchData2 = async () => {
    try {
      const url = `https://fastapi-production-b90c.up.railway.app/malefemaleperc?facebook=${facebook}&instagram=${instagram}`;
      const response = await fetch(url);
      const data = await response.json();
      setGender(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData3 = async () => {
    try {
      const url = `https://fastapi-production-b90c.up.railway.app/cities`;
      const response = await fetch(url);
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchData2();
    fetchData3();
  }, []);

  return (
    <div className="content">
      <div className="left-container">
        <div className="tituloizq">
          <h1 className="titulo">DEMOGRAPHICS</h1>
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
        <button
          className="fetch-button"
          onClick={() => {
            fetchData();
            fetchData2();
            fetchData3();
          }}
          disabled={loading}
          style={{ backgroundColor: loading ? "#222222" : "red" }}
        >
          {loading ? "Cargando..." : "Realizar Búsqueda"}
        </button>
      </div>
      <div className="right-container">
        {loading ? (
          <div className="loader-container">
            <ThreeBody size={60} speed={1.1} color="red" />
          </div>
        ) : (
          <>
            <div className="charts-container">
              <div className="male-chart-container">
                <DonutChart
                  className="male-chart"
                  style={{ marginTop: 0 }}
                  data={gender}
                  colors={["#FF1800", "#222222"]}
                />
                <img
                  className="male-img"
                  src="https://cdn.midjourney.com/72702343-ac6c-4ff1-8a4a-591e50953993/grid_0.png"
                  alt=""
                />
              </div>
              <div className="female-chart-container">
                <DonutChart
                  className="male-chart"
                  data={gender}
                  colors={["#222222", "#FF1800"]}
                />
                <img
                  className="female-img"
                  src="https://cdn.midjourney.com/2fafe310-a5b5-499c-bb7e-1400e016771f/grid_0.png"
                  alt=""
                />
              </div>
            </div>
            <BarsChart className="demo-bars-chart" data={ageGender} />
            <div>
              <Tabla data={tableData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
