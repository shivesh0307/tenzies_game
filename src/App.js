import logo from './logo.svg';
import './App.css';
import Dice from './components/Dice';
import { useState } from 'react';
import React from 'react';
import { nanoid } from 'nanoid';
function App() {

  const [dice, setDice] = React.useState(allNewDice())
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(
          { value:Math.ceil(Math.random() * 6),
            isHeld:false,
            id:nanoid()
          })
    }
    console.log(newDice);
    return newDice
}
const diceElements = dice.map(item => <Dice value={item.value} key={item.id} />)
  return (
    <main>
      <div className='dice-container'>
    {diceElements}
    {/*dice.map(item => <Dice value={item} />)*/}
    </div>
    </main>
  )
}

export default App;
