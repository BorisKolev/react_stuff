import React from "react"
import "./App.css"
import Header from "./Components/Header"
import Meme from "./Components/Meme"
import WindowTracker from "./WindowTracker"

export default function App()
{

    const [show, setShow] = React.useState(true) 

    function Toggle()
    {
        setShow(!show)
    }

    return (

        <div>
            {/* <Header/>
            <Meme/>  */}

            <div className="container">
                 <button onClick={Toggle}>
                    Toggle WindowTracker
                 </button>
                 {show && <WindowTracker/>}
            </div>
        </div>

    )
}