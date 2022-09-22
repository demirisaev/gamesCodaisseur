import { useState, useEffect } from "react";
import "./Card.css";
import pokeCard from "../poke-card.jpeg";
//pokecardd img doesnt import

function Card({ mon, handleChoice, flipped, disabled }) {
  //   function handleClick(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     handleChoice(mon);
  //   }
  return (
    <div className="card-container">
      <div className={flipped ? "flipped" : ""}>
        <img className="front " src={mon.src} alt="front-side" />
        <img
          className="back memAni"
          src={pokeCard}
          onClick={function (e) {
            if (disabled === false) {
              // do stuff only if cards are not disabled
              e.preventDefault();
              e.stopPropagation();
              handleChoice(mon);
            }
          }}
          alt="back-side"
        />
      </div>
    </div>
  );
}

export default Card;
