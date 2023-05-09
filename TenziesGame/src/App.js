import React from "react"
import Die from "./Components/Die"
import Confetti from "react-confetti"
import "./style.css"
import {nanoid} from "nanoid"

export default function App() {

  const [Dice, setDice] = React.useState(initializeRandomDiceArray())
  const [Tenzies, setTenzies] = React.useState(false)

  React.useEffect( () => {
    const areAllHeld = Dice.every(die => die.isHeld)
    const firstValue = Dice[0].value
    const areAllSameValue = Dice.every(die => die.value === firstValue)
    if(areAllHeld && areAllSameValue){
      setTenzies(true)
      console.log("You won!")
    }
  }, [Dice])

  function initializeRandomDiceArray()
  {
    const newDice = []

    for(let i = 0; i < 10; i++)
    {
      newDice.push({value: Math.floor(Math.random() * 6),
                    isHeld: false,
                    id: nanoid()
                  })
    }

    return newDice
  }
  
  function rollDice()
  {
    if(Tenzies)
    {
      setTenzies(false)
      setDice(initializeRandomDiceArray())
    }

    setDice(prevState => {
      return prevState.map(
        die => {
          return die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6)} 
        }
      )
    })
  }

  function handleDieClick(id)
  {
    setDice(prevState => {
      return prevState.map(
        die => {
          return die.id === id ? {...die, isHeld: !die.isHeld} : die
        }
      )
    })
  }

  const diceElements = Dice.map(die => {
                                return( <Die key={die.id}
                                             id={die.id}
                                             value={die.value}
                                             isHeld={die.isHeld}
                                             handleDieClick={handleDieClick}/> )
                              })

  return (
    <main>
      {Tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>

      <p className="instructions">
        Roll until all dice are the same.
        Click each die to freeze it when you roll.
        You win when all dice are the same.
      </p>
      
      <div className="dice--container">
        {diceElements}
      </div>
      
      <button className="roll--dice--button"
              onClick={rollDice}> 
              {Tenzies ? "You won!" : "Roll" } 
      </button>
    
    </main>
  );
}
 