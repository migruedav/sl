import React, { useState } from "react";
import { RiInformationFill } from 'react-icons/ri';
import style from '../components/InfoButton.module.css';

const InfoButton = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className={style.container}>
      <button className={style.button} onClick={handleClick}>
        <RiInformationFill size={24} color={"black"} />
      </button>
      <div
        className={style.text}
        style={{ display: showInfo ? "block" : "none" }}
      >
        Los valores del 0 al 100 muestran el interés relativo de un término de búsqueda en Google. Un valor de 0 significa que no hay suficientes datos disponibles, mientras que un valor de 100 indica que el término está en su punto máximo de popularidad en el periodo de tiempo elegido.
      </div>
    </div>
  );
};

export default InfoButton;
