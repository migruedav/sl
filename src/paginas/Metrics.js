import React, { useState, useEffect } from "react";
import "./Metrics.css";
import Contador from "../components/Contador";
import LineChart from "../components/LineChart";

export default function Metrics() {
  const [dias, setDias] = useState(30);
  const [facebook, setFacebook] = useState(true);
  const [instagram, setInstagram] = useState(false);
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState();
  const colorsFacebook = [
    "#0c2c4d",
    "#1b446f",
    "#2a5c91",
    "#3a74b4",
    "#7a9ecb",
    "#b7cfe2",
    "#f2f6fa",
  ];

  const colorsInstagram = [
    "#E4405F"
  ];
  // FUNCIONES

  const facebookButtonClick = (e, state) => {
    facebook ? setFacebook(false) : setFacebook(true);
    facebook ? setInstagram(true) : setInstagram(false);
    setDias(30);
  };
  const instagramButtonClick = (e, state) => {
    instagram ? setFacebook(true) : setFacebook(false);
    instagram ? setInstagram(false) : setInstagram(true);
    setDias(30);
  };

  const fetchData = async (days) => {
    try {
      setLoading(true);
      const url = `https://fastapi-production-b90c.up.railway.app/metrics?days=${days}&facebook=${facebook}&instagram=${instagram}`;
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      setMetrics(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(dias);
  }, []);

  useEffect(() => {
    fetchData(dias);
  }, [facebook]);

  console.log(metrics);
  console.log(`Días = ${dias}`);
  return (
    <div className="content">
      <div className="left-container">
        <div className="tituloizq">
          <h1 className="titulo">METRICS</h1>
          <hr className="divider" />
        </div>
        <button
          className="button"
          onClick={(e) => facebookButtonClick(e, facebook)}
          style={{
            backgroundColor: facebook ? "red" : "#222222",
          }}
        >
          Facebook
        </button>
        <button
          className="button"
          onClick={(e) => instagramButtonClick(e, instagram)}
          style={{
            backgroundColor: instagram ? "red" : "#222222",
          }}
        >
          Instagram
        </button>
        <p>Métricas de los últimos</p>
        {facebook ? (
          <select value={dias} onChange={(e) => setDias(e.target.value)}>
            <option value="7">7 días</option>
            <option value="15">15 días</option>
            <option value="30">30 días</option>
            <option value="60">60 días</option>
            <option value="90">90 días</option>
          </select>
        ) : (
          <select value={dias} onChange={(e) => setDias(e.target.value)}>
            <option value="7">7 días</option>
            <option value="15">15 días</option>
            <option value="30">30 días</option>
          </select>
        )}
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
        {facebook ? (
          <div className="all-metrics-container">
            <h1
              className="social-network-title"
              style={{ backgroundColor: "blue" }}
            >
              FACEBOOK METRICS
            </h1>
            <div className="followers-container">
              <Contador
                width="300px"
                end={loading ? 0 : metrics.followers}
                title="Followers"
                backgroundColor="blue"
                counterColor="white"
                sufijo=""
                sufijoColor="#222222"
                titleColor="white"
                height="150px"
              />
              <Contador
                width="300px"
                height="150px"
                end={loading ? 0 : metrics.page_fans_difference}
                title="New Fans"
                backgroundColor="blue"
                counterColor="white"
                sufijo=""
                sufijoColor="white"
                titleColor="white"
              />
              <Contador
                width="300px"
                end={loading ? 0 : metrics.page_fans_difference_percentage}
                title="New Fans %"
                backgroundColor="blue"
                counterColor="white"
                sufijo=""
                sufijoColor="white"
                titleColor="white"
                decimals={2}
                height="150px"
              />
            </div>
            {loading ? (
              ""
            ) : (
              <>
                <h1>Page Fans</h1>
                <LineChart
                  data={metrics.page_fans}
                  backgroundColor="white"
                  lineColor={colorsFacebook}
                  type="LineChart"
                  height="350px"
                  width="900px"
                />
              </>
            )}
            {loading ? (
              "Loading"
            ) : (
              <>
                <h1>Impressions</h1>
                <LineChart
                  data={metrics.impressions}
                  backgroundColor="white"
                  lineColor={colorsFacebook}
                  type="LineChart"
                  height="350px"
                  width="900px"
                />
              </>
            )}

            {loading ? (
              ""
            ) : (
              <>
                <h1>Reach</h1>
                <LineChart
                  data={metrics.reach}
                  backgroundColor="white"
                  lineColor={colorsFacebook}
                  type="LineChart"
                  height="350px"
                  width="900px"
                />
              </>
            )}

            {loading ? (
              ""
            ) : (
              <>
                <h1>
                  <>Engagement</>
                </h1>
                <LineChart
                  data={metrics.engagement}
                  backgroundColor="white"
                  lineColor={colorsFacebook}
                  type="LineChart"
                  height="350px"
                  width="100%"
                />
              </>
            )}
            {loading ? (
              ""
            ) : (
              <>
                <h1>Reactions</h1>
                <LineChart
                  data={metrics.reactions}
                  backgroundColor="white"
                  lineColor={colorsFacebook}
                  type="LineChart"
                  height="350px"
                  width="900px"
                />
              </>
            )}
            {loading ? (
              ""
            ) : (
              <>
                <h1>Video Views</h1>
                <LineChart
                  data={metrics.video_views}
                  backgroundColor="white"
                  lineColor={colorsFacebook}
                  type="LineChart"
                  height="350px"
                  width="900px"
                />
              </>
            )}
          </div>
        ) : (
          <></>
        )}

        {instagram ? (
          <div className="all-metrics-container">
            <h1
              className="social-network-title"
              style={{ backgroundColor: "#E4405F" }}
            >
              INSTAGRAM METRICS
            </h1>
            <div className="followers-container">
              <Contador
                width="100%"
                end={loading ? 0 : metrics.followers}
                title="Followers"
                backgroundColor="#E4405F"
                counterColor="white"
                sufijo=""
                sufijoColor="#222222"
                titleColor="white"
                height="150px"
              />
            </div>
            {loading ? (
              "Loading"
            ) : (
              <>
                <h1>Impressions</h1>
                <LineChart
                  data={metrics.impressions}
                  backgroundColor="white"
                  lineColor={colorsInstagram}
                  type="LineChart"
                  height="350px"
                  width="900px"
                />
              </>
            )}

            {loading ? (
              ""
            ) : (
              <>
                <h1>Reach</h1>
                <LineChart
                  data={metrics.reach}
                  backgroundColor="white"
                  lineColor={colorsInstagram}
                  type="LineChart"
                  height="350px"
                  width="900px"
                />
              </>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
