import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllScores } from "./store/score/selectors";
import { getAllScores } from "./store/score/thunks";
import { Route, Routes } from "react-router-dom";
import { HomePage, MemoryPage } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const allScores = useSelector(selectAllScores());
  console.log(allScores);
  useEffect(() => {
    dispatch(getAllScores());
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/memory" element={<MemoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
