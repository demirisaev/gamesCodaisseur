import "./App.css";
import Home from "./page/Home";
import logo from "./logo.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllScores } from "./store/score/selectors";
import { getAllScores } from "./store/score/thunks";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
