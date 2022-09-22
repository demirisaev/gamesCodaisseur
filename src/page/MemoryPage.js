import axios from "axios";
import "./MemoryPage.css";
import { useState, useEffect } from "react";
import { shuffle } from "lodash";
import { v4 as uuidv4 } from "uuid";
import Card from "../component/Card";
import Timer from "../component/Timer";
import { storeTimerBool } from "../store/score/slice";
import { useDispatch } from "react-redux";
import pokeball from "../pokeball.png";

import { useStopwatch, useTimer } from "react-timer-hook";

export default function MemoryPage({ visibility, difficulty, diffClass }) {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState(null);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [turns, setTurns] = useState(0);
  const [newFlag, setNewFlag] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  // cardone & cardtwo are img paths -- WRONG, CAUSED BUG
  //   cardOne and cardTwo are pokemon objects selected by user
  //-------------------------------------------------   fetch the data
  useEffect(
    function () {
      async function fetchPokemon() {
        try {
          // fetch the data
          console.log("fetch datassss");

          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/?limit=${difficulty}`
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
          const duplicatedWithIds = duplicated.map(function (item) {
            return { ...item, id: uuidv4() };
          });
          const shuffled = shuffle(duplicatedWithIds);
          setPokemon(shuffled);
        } catch (e) {
          console.log(e);
          console.log(e.message);
        }
      }

      fetchPokemon();
    },
    [newFlag, difficulty]
  );
  // -------------------------------------------------  Fetch data

  //comparing selected cards
  useEffect(
    function () {
      if (cardOne && cardTwo) {
        // disable all cards immediately once we have 2 selections so that further selections can't be made
        //this can overwrite current ones and break logic
        //set to false when we reset choices
        setDisabled(true);
        // if cardone image source is equal to card 2, and ids are different
        // added id check otherwise clicking 1 would automatically show both pics
        if (cardOne.src === cardTwo.src && cardOne.id !== cardTwo.id) {
          setPokemon(function (prevArr) {
            return prevArr.map(function (item) {
              if (item.src === cardOne.src) {
                return { ...item, matched: true };
              } else {
                return item;
              }
            });
          });
          //   reset choices after correct match
          resetChoices();
        } else {
          // reset choices after wrong match
          // wrap reset call in setTimeout to prevent failed match immediately removing the card face

          setTimeout(function () {
            resetChoices();
          }, 1000);
        }
      }
    },
    [cardOne, cardTwo]
  );

  useEffect(() => {
    if (
      pokemon &&
      pokemon.every((pkmn) => {
        return pkmn.matched;
      })
    ) {
      //set gameover
      setGameOver(true);
    }
  }, [cardTwo]);

  //   handler for selecting a card/clicking a card, related to flip logic
  function handleChoice(cardObj) {
    // set value for card 1 and card 2
    console.log("setting");
    cardOne ? setCardTwo(cardObj) : setCardOne(cardObj);
  }

  const [timerStart, setTimerStart] = useState("no");

  function resetChoices() {
    setCardOne(null);
    setCardTwo(null);
    setTurns((curr) => curr + 1);
    setDisabled(false);
  }

  function resetGame() {
    setCardOne(null);
    setCardTwo(null);
    setTurns(0);
    setDisabled(false);
    setNewFlag(!newFlag);
    reset();
  }

  //timer logic
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  useEffect(() => {
    start();
  }, []);

  const [pkmnarr, setpkmnarr] = useState([]);
  useEffect(() => {
    //pokeball logic
    for (let i = 0; i <= 90; i++) {
      pkmnarr.push(
        <img
          id="pokeball"
          className={`poke-${i}`}
          style={{
            right: `${i * 50}px`,
            // top: `${i * 70}px`,
            animationDelay: `${Math.random() * 4}s`,
          }}
          src={pokeball}
          alt=""
        />
      );
    }
  }, []);

  const [pokevis, setpokevis] = useState(false);

  return (
    <>
      {!visibility ? (
        ""
      ) : (
        <div id="MemoryPage">
          <div id="memoryGameCircleDiv">
            <div id="circle"></div>
            <button className="btn-black btn new" onClick={resetGame}>
              New Game
            </button>
            <div id="Timer" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "100px" }}>
                <span>{minutes}</span>:<span>{seconds}</span>
              </div>
              <p>{isRunning ? "Running" : "Not running"}</p>
              {/* <button onClick={start}>Start</button>
   <button onClick={pause}>Pause</button>
<button onClick={reset}>Reset</button> */}
            </div>
          </div>

          <div className="memory-container">
            <h2>Turns: {turns}</h2>
            <ul className={`card-list  ${diffClass}`}>
              {pokemon &&
                pokemon.map(function (item, index, arr) {
                  return (
                    <Card
                      key={item.id}
                      className="Card "
                      handleChoice={handleChoice}
                      mon={item}
                      disabled={disabled}
                      flipped={
                        item === cardOne || item === cardTwo || item.matched
                      }
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      )}

      {!gameOver ? (
        ""
      ) : (
        <>
          <iframe
            width="560"
            height="0"
            src="https://www.youtube.com/embed/6xKWiCMKKJg?&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div
            className={` ${pokevis ? "balls" : "pokevis"}`}
            style={{ display: "flex", flexWrap: "wrap", width: "100vw" }}
          >
            {pkmnarr}
          </div>
        </>
      )}
    </>
  );
}
