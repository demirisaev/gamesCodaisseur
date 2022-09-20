import React from "react";
import "./Style.css";
import Footer from "../component/Footer";
import Header from "../component/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="choose_game">
            <button className="btn btn-black">16 Cards</button>
            <button className="btn btn-black">24 Cards</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
