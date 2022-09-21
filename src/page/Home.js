import React from "react";
import "./Style.css";
import Footer from "../component/Footer";
import Header from "../component/Header";
import MemoryPage from "./MemoryPage";
import { useState } from "react";

const Home = () => {
  const [difficulty, setDifficulty] = useState(8);
console.log(difficulty)
  return (
    <div>
      <Header />
      <div className="homeContent">
        <div className="row">
          <div className="choose_game">
            <button onClick={() => setDifficulty(8)} className="btn btn-black">16 Cards</button>
            <button onClick={() => setDifficulty(16)} className="btn btn-black">24 Cards</button>
          </div>
        </div>
      <MemoryPage difficulty={difficulty} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
