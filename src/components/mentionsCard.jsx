import React from "react";
import { FaHeart } from "react-icons/fa";
import "./socialMediaCard.css";

const socialMediaCard = (props) => {
  return (
    <div className="card">
      <div className="card-profile-creador">{props.creador}</div>
      <div className="card-profile-mentions">
        <div className="card-profile-index">{props.index}</div>
        <div className="card-date">{props.fecha}</div>
        <FaHeart className="heart-icon" />
        <div className="likes">{props.likes}</div>
      </div>
      <div
        className="card-line"
        style={{ backgroundColor: `${props.color}` }}
      ></div>
      <img className="card-image" src={props.imagen} alt="" />
      <div className="card-text">{props.texto}</div>
    </div>
  );
};

export default socialMediaCard;
