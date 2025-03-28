import React from "react";
import { useNavigate } from "react-router-dom";
import { PuzzlePieceIcon } from "@heroicons/react/24/solid"; 
import s from '../Styles/TakeABreak.module.css';

const TakeABreak = ({ setTabContent }) => {
  const handleRedirect = () => {
    setTabContent("TakeABreakPage"); // Change tab content to TakeABreakPage
  };
  return (
    <div className={s.container}>
      <div className={s.funFact}>
        <span>Fun fact: Rewarding yourself after studying improves results!</span>
        <button onClick={handleRedirect} className={s.iconButton}>
          <PuzzlePieceIcon className={s.icon} />
        </button>
      </div>
    </div>
  );
};

export default TakeABreak;