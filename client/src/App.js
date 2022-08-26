import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import './App.css';
import PlayerTwoForm from './components/Header/PlayerTwoForm';
import PlayerOneForm from './components/Header/PlayerOneForm';
import GameLogic from './components/Game/Board/Board';
import Rating from './components/Game/Raiting.js/Rating';

function App() {
  return (
    <div className="App">
      <div className="playersforms">
        <PlayerOneForm />
        <PlayerTwoForm />
      </div>
      <div className="GameLine">
        <GameLogic />
      </div>

      <div>
        <Rating />
      </div>
    </div>
  );
}

export default App;
