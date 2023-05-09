import React from "react"

export default function WindowTracker()
{
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        window.addEventListener("resize", function()
        {
            setWindowWidth(prevState => windowWidth.innerWidth)
        }, [])
    })

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}