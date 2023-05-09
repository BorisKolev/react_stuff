import React from "react"
import "./Style.css"

import starFilled from "../images/star-filled.png";
import starEmpty from "../images/star-empty.png";

export default function Star(props)
{

    let starIcon = props.isFilled ? starFilled : starEmpty

    return (
        <img
        className="card--favorite"
        src={`${starIcon}`}
        onClick={props.handleClick}
        />
    )
}