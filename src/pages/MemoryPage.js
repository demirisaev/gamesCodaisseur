import axios from "axios";
import "./MemoryPage.css";
import { useState, useEffect } from "react";
import { shuffle } from "lodash";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";

export default function MemoryPage() {
  const [pokemon, setPokemon] = useState(null);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //-------------------------------------------------   fetch the data
  useEffect(function () {
    async function fetchPokemon() {
      try {
        // fetch the data

        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?limit=12"
        );
        const pokeArr = response.data.results;
        if (!pokeArr || pokeArr.length < 1)
          throw new Error("HTTP 4O4, pokemon not found");
        //   return array of {name,src,matched}
        const modified = pokeArr.map(function (item, index, arr) {
          return {
            name: item.name,
            src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`,
            matched: false,
          };
        });
        //   duplicate the data
        const duplicated = [...modified, ...modified];
        setPokemon(duplicated);
      } catch (e) {
        console.log(e);
        console.log(e.message);
      }
    }

    fetchPokemon();
  }, []);
  // -------------------------------------------------  Fetch data

  //--------------------------------   Card FLIP LOGIC------------------------------

  return (
    <div id="MemoryPage">
      <div id="memoryGameCircleDiv">
        <div id="circle">Memory Game</div>
      </div>

      <div className="memory-container">
        <ul className="card-list">
          {pokemon &&
            pokemon.map(function (item, index, arr) {
              return <Card key={item.id} pokemon={item} />;
            })}
        </ul>
      </div>
    </div>
  );
}
