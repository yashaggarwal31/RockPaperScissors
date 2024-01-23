import React from 'react'
import { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import GameSequence from './GameSequence';

export default function Home() {
  const [gameSequence, setGameSequence] = useState();

  const startGame = () => {
    setGameSequence(true);
  }

  return (
    <div>
      <header id="headContent">
        <h1>Rock Paper Scissors Game</h1>
      </header>
      {(!gameSequence) ? <WelcomeScreen startGame={startGame} /> : <GameSequence />}
    </div>
  )
}
