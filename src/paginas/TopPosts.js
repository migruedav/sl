import React, { useState, useEffect } from "react";
import SocialMediaCard from "../components/socialMediaCard";

export default function TopPosts() {
  // VARIABLES

  const [dias, setDias] = useState(30);
  const [cantidad, setCantidad] = useState(20);
  const [facebook, setFacebook] = useState(true);
  const [instagram, setInstagram] = useState(true);
  const [youtube, setYoutube] = useState(false);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  // FUNCIONES

  const handleButtonClick = (e, state, setState) => {
    e.preventDefault();
    setState(!state);
  };

  const fetchData = async (days, cantidad, facebook, instagram, youtube) => {
    try {
      setLoading(true);
      const url = `https://fastapi-production-b90c.up.railway.app/top2?days=${days}&cantidad=${cantidad}&facebook=${facebook}&instagram=${instagram}&youtube=${youtube}`;
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
    fetchData(dias, cantidad, facebook, instagram, youtube);
  }, []);

  // RETURN

  return (
    <div className="content">
      <div className="left-container">
        <div className="tituloizq">
          <h1 className="titulo">TOP POSTS</h1>
          <hr className="divider" />
        </div>
        <button
          onClick={(e) => handleButtonClick(e, facebook, setFacebook)}
          style={{
            backgroundColor: facebook ? "red" : "#222222",
          }}
        >
          Facebook
        </button>
        <button
  
          onClick={(e) => handleButtonClick(e, instagram, setInstagram)}
          style={{
            backgroundColor: instagram ? "red" : "#222222",
          }}
        >
          Instagram
        </button>
        

        <p>Top Posts de los últimos</p>
        <select value={dias} onChange={(e) => setDias(e.target.value)}>
          <option value="7">7 días</option>
          <option value="15">15 días</option>
          <option value="30">30 días</option>
          <option value="60">60 días</option>
          <option value="120">120 días</option>
          <option value="180">180 días</option>
          <option value="360">360 días</option>
        </select>
        <p>Cuántos posts quieres mostrar</p>
        <select value={cantidad} onChange={(e) => setCantidad(e.target.value)}>
          <option value="10">top 10 posts</option>
          <option value="20">top 20 posts</option>
          <option value="50">top 50 posts</option>
          <option value="700">top 100 posts</option>
        </select>
        <button
          className="fetch-button"
          onClick={() =>
            fetchData(dias, cantidad, facebook, instagram, youtube)
          }
          disabled={loading}
          style={{backgroundColor: loading ? "#222222" : "red"}}>
          {loading ? "Cargando..." : "Realizar Búsqueda"}
        </button>
      </div>

      <div className="right-container">
        {cards &&
          cards.map((card, index) => (
            <div key={index}>
              <SocialMediaCard
                fecha={card.fecha}
                likes={card.likes}
                imagen={card.imagen}
                texto={card.texto}
                color={card.color}
                index={index + 1}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
