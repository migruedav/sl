import React, { useState, useEffect } from "react";
import MentionsCard from "../components/mentionsCard";
import { ThreeBody } from "@uiball/loaders";

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
      const url = `https://fastapi-production-b90c.up.railway.app/mentions2?days=${days}&cantidad=${cantidad}&facebook=${facebook}&instagram=${instagram}&sortedby=${sortedby}`;
      const response = await fetch(url);
      const data = await response.json();
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
          <h1 className="titulo">MENTIONS</h1>
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

        <p>Menciones de los últimos</p>
        <select value={dias} onChange={(e) => setDias(e.target.value)}>
          <option value="7">7 días</option>
          <option value="15">15 días</option>
          <option value="30">30 días</option>
          <option value="60">60 días</option>
          <option value="120">120 días</option>
          <option value="180">180 días</option>
          <option value="365">365 días</option>
        </select>
        <p>Recibir las menciones </p>
        <select value={sortedby} onChange={(e) => setSortedby(e.target.value)}>
          <option value="likes">Con más likes</option>
          <option value="fecha">Más recientes</option>
        </select>
        <p>¿Cuántas menciones?</p>
        <select value={cantidad} onChange={(e) => setCantidad(e.target.value)}>
          <option value="10">top 10 menciones</option>
          <option value="20">top 20 menciones</option>
          <option value="50">top 50 menciones</option>
          <option value="700">top 100 menciones</option>
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
        {loading ? (
          <div className="loader-container">
            <ThreeBody size={60} speed={1.1} color="red" />
          </div>
        ) : (
          cards &&
          cards.map((card, index) => (
            <div key={index}>
              <MentionsCard
                fecha={card.fecha}
                likes={card.likes}
                imagen={card.imagen}
                texto={card.texto}
                color={card.color}
                index={index + 1}
                creador={card.creador}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
