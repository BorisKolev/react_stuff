import React from "react"
import "../style.css"

export default function Die(props)
{   
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    console.log(props.hold)
    return(
        <div style={styles} 
             className="die--container"
             onClick={() => props.handleDieClick(props.id)}>

            <h2 className="die--value">
                {props.value}
            </h2>
        
        </div>
    )
}