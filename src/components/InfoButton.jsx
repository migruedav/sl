import React, { useState } from "react";
import { RiInformationFill } from 'react-icons/ri';
import style from '../components/InfoButton.module.css';

const InfoButton = ({text}) => {
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
        {text}
      </div>
    </div>
  );
};

export default InfoButton;
