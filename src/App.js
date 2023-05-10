import logo from './logo.svg';
import './App.css';
import Dice from './components/Dice';
import { useState } from 'react';
import React from 'react';
import Confetti from 'react-confetti';
import { nanoid } from 'nanoid';
function App() {

  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false)
  //console.log(tenzies);
  React.useEffect(() => {
    const allHeld = dice.every(element => element.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(element => element.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }
}, [dice])

  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}
 
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(
            generateNewDie()
          )
    }
    //console.log(newDice);
    return newDice
}

function rollDice()
{
  setDice(olddice=>olddice.map(
    (item)=>
    {
      if(item.isHeld==true) return item;
      else
      {
        return generateNewDie(); 
      }
    }
  ));
}

function holdDice(id)
{
  setDice(olddice=>olddice.map((item)=>
  {
   if(item.id==id)
   {
     return {...item, isHeld:!item.isHeld};
   }
   else 
   return item;
  }));
}
const diceElements = dice.map(item => <Dice value={item.value} key={item.id} id={item.id}
  isHeld={item.isHeld}  holdDice={holdDice}
  />)
  function newGame()
  {
    window. location. reload();
  }

  return (
    <main>
       {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same.
             Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
    {diceElements}
    {/*dice.map(item => <Dice value={item} />)*/}
    </div>
    <button className="roll-dice" onClick={tenzies? newGame : rollDice}>
      {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  )
}

export default App;
