import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllScores } from "./store/score/selectors";
import { getAllScores } from "./store/score/thunks";
import Home from "./page/Home";

function App() {
  const dispatch = useDispatch();
  const allScores = useSelector(selectAllScores());
  console.log(allScores);
  useEffect(() => {
    dispatch(getAllScores());
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
