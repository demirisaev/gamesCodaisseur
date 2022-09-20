import { useState, useEffect } from "react";
import "./Card.css";
import pokeCard from "../poke-card.jpg";

function Card({ pokemon }) {
  return (
    <article>
      <div className="memory-card">
        <img className="back" src={pokeCard} alt="back-side" />
        <img className="front" src={pokemon.src} alt="" />
      </div>
    </article>
  );
}

export default Card;
