import React, { useState, useEffect, useRef } from "react";
import html2pdf from "html2pdf.js";
import style from "./Report.module.css";
import logo from "../images/logo.png";
import { ThreeBody } from "@uiball/loaders";

const Report = () => {
  //VARIABLES
  const pageRef = useRef();
  const [dias, setDias] = useState(30);
  const [sentiment, setSentiment] = useState([]);
  const [trends, setTrends] = useState([]);
  const [terms, setTerms] = useState([]);
  const [metricsf, setMetricsf] = useState([]);
  const [metricsIg, setMetricsIg] = useState([]);
  const [audience, setAudience] = useState([]);

  const [fetch1, setFetch1] = useState(true);
  const [fetch2, setFetch2] = useState(true);
  const [fetch3, setFetch3] = useState(true);
  const [fetch4, setFetch4] = useState(true);
  const [fetch5, setFetch5] = useState(true);
  const [fetch6, setFetch6] = useState(true);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("es-MX");

  const pageWidthPx = 900;
  const pageHeightPx = 1800;
  const pxToPt = 0.75;

  //FUNCTIONS
  const exportToPDF = () => {
    const options = {
      filename: `Reporte_Formica_${formattedDate}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, width: pageWidthPx },
      jsPDF: {
        unit: "pt",
        format: [pageWidthPx * pxToPt, pageHeightPx * pxToPt],
        orientation: "portrait",
      },
    };
    html2pdf().from(pageRef.current).set(options).save();
  };

  async function fetch1f() {
    try {
      setFetch1(true);
      const url = `https://fastapi-production-b90c.up.railway.app/sentiment?days=${dias}&facebook=true&instagram=true`;
      const response = await fetch(url);
      const data = await response.json();
      setSentiment(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setFetch1(false);
    }
  }

  async function fetch2f() {
    try {
      setFetch2(true);
      const url = `https://fastapi-production-b90c.up.railway.app/trends2?days=${dias}&keywords=formica`;
      const response = await fetch(url);
      const data = await response.json();
      const stateScores = await data.interest_by_region.reduce(
        (acc, [state, score]) => {
          acc[state] = score;
          return acc;
        },
        {}
      );
      const sortedEntries = await Object.entries(stateScores).sort(
        ([, scoreA], [, scoreB]) => scoreB - scoreA
      );
      const top5 = sortedEntries.slice(1, 6);

      const top5States = top5.map(([state]) => state);
      setTrends(top5States);
      console.log(top5States);
    } catch (error) {
      console.log(error);
    } finally {
      setFetch2(false);
    }
  }

  const fetch3f = async () => {
    try {
      setFetch3(true);
      const url = `https://fastapi-production-b90c.up.railway.app/wordcloud?days=${dias}&keyword=formica`;
      const response = await fetch(url);
      const data = await response.json();
      const terms = data.map((term, index) => (
        <span key={index}>
          {term.text}
          {index !== data.length - 1 ? ", " : ""}
        </span>
      ));
      setTerms(terms);
      console.log(terms);
    } catch (error) {
      console.log(error);
    } finally {
      setFetch3(false);
    }
  };

  const fetch4f = async () => {
    try {
      setFetch4(true);
      const url = `https://fastapi-production-b90c.up.railway.app/metrics?days=${dias}&facebook=true&instagram=false`;
      const response = await fetch(url);
      const data = await response.json();
      setMetricsf(data);
      console.log(metricsf);
    } catch (error) {
      console.log(error);
    } finally {
      setFetch4(false);
    }
  };

  const fetch5f = async () => {
    try {
      setFetch5(true);
      const url = `https://fastapi-production-b90c.up.railway.app/metrics?days=${dias}&facebook=false&instagram=true`;
      const response = await fetch(url);
      const data = await response.json();
      setMetricsIg(data);
      console.log(metricsIg);
    } catch (error) {
      console.log(error);
    } finally {
      setFetch5(false);
    }
  };

  const fetch6f = async () => {
    try {
      setFetch6(true);
      const url = `https://fastapi-production-b90c.up.railway.app/audience`;
      const response = await fetch(url);
      const data = await response.json();
      setAudience(data);
      console.log(audience);
    } catch (error) {
      console.log(error);
    } finally {
      setFetch6(false);
    }
  };

  useEffect(() => {
    fetch1f();
    fetch2f();
    fetch3f();
    fetch4f();
    fetch5f();
    fetch6f();
  }, []);

  useEffect(() => {
    fetch1f();
    fetch2f();
    fetch3f();
    fetch4f();
    fetch5f();
    fetch6f();
  }, [dias]);

  //RETURN

  return (
    <>
      <div>
        <div className={style.diasBoton}>
          <p>Reporte de los últimos</p>
          <select value={dias} onChange={(e) => setDias(e.target.value)}>
            <option value="7">7 días</option>
            <option value="15">15 días</option>
            <option value="30">30 días</option>
            <option value="60">60 días</option>
            <option value="90">90 días</option>
          </select>
          <button
            onClick={exportToPDF}
            className={style.exportButton}
            disabled={fetch1 || fetch2 || fetch3 || fetch4 || fetch5 || fetch6}
            style={{
              backgroundColor:
                fetch1 || fetch2 || fetch3 || fetch4 || fetch5 || fetch6
                  ? "lightgray"
                  : "red",
            }}
          >
            {fetch1 || fetch2 || fetch3 || fetch4 || fetch5 || fetch6
              ? "Cargando..."
              : "Exportar a PDF"}
          </button>
        </div>

        <div className={style.container} ref={pageRef}>
          <div className={style.containerImg}>
            <img src={logo} alt="Logotipo de Fórmica" />
          </div>
          <h1>REPORTE DE LOS ÚLTIMOS {dias} DÍAS</h1>
          <p>{formattedDate}</p>

          {/*TRENDS */}
          {fetch1 || fetch2 || fetch3 || fetch4 || fetch5 || fetch6 ? (
            <>
              <p>Preparando Reporte...</p>
              <div className={style.loaderContainer}>
                <ThreeBody size={60} speed={1.1} color="red" />
              </div>
            </>
          ) : (
            <>
              <div className={style.sentiment}>
                <h1>SENTIMENT</h1>
                <p>
                  El sentimiento sobre tu marca fue {sentiment.percepcion}
                  <br />
                  Tienes un Score de {sentiment.total_str}/100 <br /> Con un
                  total del {sentiment.porcentaje_positivos_str}% de mensajes
                  positivos <br />
                  La objetividad del ánalisis es de {sentiment.objetividad_str}%
                </p>
              </div>
              <div className={style.trends}>
                <h1>TRENDS</h1>
                <p>
                  Los estádos en los que tuviste más interés fueron:
                  <br /> {trends[0]}, {trends[1]}, {trends[2]}, {trends[3]} y{" "}
                  {trends[4]}
                </p>
              </div>
              <div className={style.keywords}>
                <h1>KEYWORDS</h1>
                <p>
                  Los términos relacionados más buscados fueron: <br />
                  {terms.length > 5 ? terms.slice(0, 5) : terms}
                </p>
              </div>
              <div className={style.facebook}>
                <h1>FACEBOOK METRICS</h1>

                <p>
                  Tienes {metricsf.followers.toLocaleString("es-MX")} Followers{" "}
                </p>
                <p>En estos {dias} días conseguiste:</p>
                <p>
                  {metricsf.page_fans_difference.toLocaleString("es-MX")} Nuevos
                  Fans ( +{metricsf.page_fans_difference_percentage.toFixed(2)}
                  %)
                </p>
                <p>
                  Impressions :{" "}
                  {metricsf.total_impressions.toLocaleString("es-MX")} <br />
                  Engagement :{" "}
                  {metricsf.total_engagement.toLocaleString("es-MX")}
                  <br />
                  Reach : {metricsf.total_reach.toLocaleString("es-MX")}
                </p>
              </div>
              <div className={style.instagram}>
                <h1>INSTAGRAM METRICS</h1>

                <p>
                  Tienes {metricsIg.followers.toLocaleString("es-MX")} Followers{" "}
                </p>
                <p>En estos {dias} días conseguiste:</p>
                <p>
                  {metricsIg.new_followers_total.toLocaleString("es-MX")} Nuevos
                  Followers ( +
                  {metricsIg.new_followers_total_percentage.toFixed(2)}%)
                </p>
                <p>
                  Impressions :{" "}
                  {metricsIg.total_impressions.toLocaleString("es-MX")} <br />
                  Reach : {metricsIg.total_reach.toLocaleString("es-MX")}
                </p>
              </div>
              <div className={style.demographics}>
                <h1>DEMOGRAPHICS</h1>

                <p>Tu mayor audiencia se encuentra en {audience}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Report;
