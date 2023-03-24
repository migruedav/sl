import React from "react";
import { useState } from "react";

export default function TopPosts() {
  // VARIABLES

  const [dias, setDias] = useState(120);
  const [facebook, setFacebook] = useState(true);
  const [instagram, setInstagram] = useState(true);
  const [youtube, setYoutube] = useState(true);

  // FUNCIONES
  
  const facebookButtonClick = (e) => {
    e.preventDefault();
    setFacebook(!facebook);
  };
  const instagramButtonClick = (e) => {
    e.preventDefault();
    setInstagram(!instagram);
  };

  const youtubeButtonClick = (e) => {
    e.preventDefault();
    setYoutube(!youtube);
  };

  // RETURN

  return (
    <div className="content">
      <div className="left-container">
        <div className="tituloizq">
          <h1>TOP POSTS</h1>
          <hr className="divider" />
        </div>
        <button
          className="buttonClassName"
          onClick={facebookButtonClick}
          style={{
            backgroundColor: facebook ? "red" : "#222222",
          }}
        >
          Facebook
        </button>
        <button
          className="buttonClassName"
          onClick={instagramButtonClick}
          style={{
            backgroundColor: instagram ? "red" : "#222222",
          }}
        >
          Instagram
        </button>
        <button
          className="buttonClassName"
          onClick={youtubeButtonClick}
          style={{
            backgroundColor: youtube ? "red" : "#222222",
          }}
        >
          Youtube
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
        <p>{facebook ? "facebook true" : "facebook false"}</p>
        <p>{instagram ? "instagram true" : "instagram false"}</p>
        <p>{youtube ? "youtube true" : "youtube false"}</p>
      </div>

      <div className="right-container">TOP POSTS</div>
    </div>
  );
}
