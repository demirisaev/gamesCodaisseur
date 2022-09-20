import { useState, useEffect } from "react";
import "./Card.css";
import pokeCard from "../poke-card.jpg";

function Card({ mon, handleChoice, flipped }) {
  function handleClick() {
    handleChoice(mon.src);
  }
  return (
    <div className="card-container">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={mon.src} alt="front-side" />
        <img
          className="back"
          src={pokeCard}
          onClick={handleClick}
          alt="back-side"
        />
      </div>
    </div>
  );
}

export default Card;
