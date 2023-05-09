import React from "react"
import trollFace from "../photos/troll-face.png"
import "./style.css"

export default function Headers()
{
    return (
        <header>
            <img className="header--image" src={trollFace} />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project"x>React Course - Project 3</h4>
        </header>
    )
}