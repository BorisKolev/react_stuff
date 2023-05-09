import React from "react"
import "./Style.css"

export default function Joke(props)
{
  const [messages, setMessages] = React.useState(["a", "b"])
  const [isShown, setIsShown] = React.useState(true)

  function toggleShown()
  {
    setIsShown(prevShown => !prevShown)
  }

  return (

    <div>
        {
          messages.length && 
          <h1>You have {messages.length} unread messages!</h1>
        }

        {
          props.setup && 
          <h3> {props.setup}</h3>}
        
        {
          isShown &&
          <p>{props.punchline}</p>
        }

        <button onClick={toggleShown}> {isShown ? "Hide punchline" : "Show punchline" } </button>
        
        <hr/>
    </div>
  )
}