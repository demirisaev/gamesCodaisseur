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
  const [turns, setTurns] = useState(0);
  // cardone & cardtwo are img paths
  //-------------------------------------------------   fetch the data
  useEffect(function () {
    async function fetchPokemon() {
      try {
        // fetch the data

        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?limit=5"
        );
        const pokeArr = response.data.results;
        if (!pokeArr || pokeArr.length < 1)
          throw new Error("HTTP 4O4, pokemon not found");
        //   return array of {name,src,matched}
        const modified = pokeArr.map(function (item, index, arr) {
          return {
            name: item.name,
            src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
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

  function handleChoice(cardsrc) {
    // set value for card 1 and card 2
    console.log("setting");
    cardOne ? setCardTwo(cardsrc) : setCardOne(cardsrc);
  }

  useEffect(
    function () {
      if (cardOne && cardTwo && cardOne === cardTwo) {
        console.log("It's a match!");
        // set the matched card's matched properties to true
        // do map call inside setter function updater since we rely on accurate access to previous state
        //map returns new array with modified matched objects, this is returned and set as pokemon state
        setPokemon(function (prevArr) {
          return prevArr.map(function (item) {
            if (item.src === cardOne) {
              return { ...item, matched: true };
            } else {
              return item;
            }
          });
        });
        resetChoices();
        //   clear cardOne & cardTwo
      } else if (cardOne && cardTwo && cardOne !== cardTwo) {
        console.log("No match");
        resetChoices();
      }
    },
    [cardOne, cardTwo]
  );

  console.log(cardTwo);

  function resetChoices() {
    setCardOne(null);
    setCardTwo(null);
    setTurns((curr) => curr + 1);
  }

  return (
    <div id="MemoryPage">
      <div id="memoryGameCircleDiv">
        <div id="circle">Memory Game</div>
      </div>

      <div className="memory-container">
        <ul className="card-list">
          {pokemon &&
            pokemon.map(function (item, index, arr) {
              return (
                <Card
                  className="Card"
                  handleChoice={handleChoice}
                  key={Math.random()}
                  mon={item}
                  //   flipped === true will set a flip animation class
                  flipped={
                    item.src === cardOne || item.src === cardTwo || item.matched
                  }
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}
