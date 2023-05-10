import logo from './logo.svg';
import './App.css';
import Dice from './components/Dice';
import { useState } from 'react';
import React from 'react';
import { nanoid } from 'nanoid';
function App() {

  const [dice, setDice] = React.useState(allNewDice())

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
  

  return (
    <main>
      <div className='dice-container'>
    {diceElements}
    {/*dice.map(item => <Dice value={item} />)*/}
    </div>
    <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App;
