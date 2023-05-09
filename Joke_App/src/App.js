import React from "react"
import Joke from "./Components/Joke"
import jokesData from "./Data/jokesData"
import "./Components/Style.css"

export default function App()
{

  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })

  return (
    <div>
      {jokeElements}
    </div>
  )
}
