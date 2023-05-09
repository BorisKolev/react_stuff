import React from "react"
import "./Style.css"

export default function Box(props)
{
    const styles = {
        backgroundColor: props.on ? "#222222" : "#cccccc"
    }
    
    return (
        <div  className="box"
              style={styles}
              onClick={() => props.handleClick(props.id)}
              >
        </div>
    )
}