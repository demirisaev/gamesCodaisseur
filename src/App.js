import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectAllScores} from "./store/score/selectors";
import { getAllScores } from './store/score/thunks';

function App() {
  const dispatch = useDispatch();
  const allScores = useSelector(selectAllScores());
  console.log(allScores);
  useEffect(()=> {
    dispatch(getAllScores());
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
