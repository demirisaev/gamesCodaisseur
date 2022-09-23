import React from "react";
import "./Style.css";
import Footer from "../component/Footer";
import Header from "../component/Header";
import MemoryPage from "./MemoryPage";
import { useState } from "react";
import Timer from "../component/Timer";

const Home = () => {
  const [difficulty, setDifficulty] = useState(8);

  const [visibility, setVisibility] = useState(false);

  const [diffClass, setDiffClass] = useState(null);

  console.log(difficulty);
  return (
    <div>
      <Header />
      <div className="homeContent">
        <div className="row">
          <div className="choose_game">
            <button
              onClick={() => {
                setDifficulty(8);
                setVisibility(true);
                setDiffClass("sixteen");
              }}
              className="btn btn-black"
            >
              16 Cards
            </button>
            <button
              onClick={() => {
                setDifficulty(12);
                setVisibility(true);
                setDiffClass("twentyfour");
              }}
              className="btn btn-black"
            >
              24 Cards
            </button>
          </div>
        </div>
        <MemoryPage
          visibility={visibility}
          difficulty={difficulty}
          diffClass={diffClass}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
