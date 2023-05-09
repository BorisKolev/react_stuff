import React from "react"
import boxesData from "./Data/Boxes"
import Box from "./Components/Box"

import "./Components/Style.css"

export default function App(props) {

  const [boxes, setBoxes] = React.useState(boxesData)

  function handleBoxClick(id)
  {
    setBoxes(prevState => {
      return prevState.map(
        box => {
          return box.id === id ? {...box, on: !box.on} : box
        }
      )
      // const newBoxes = []
      // for(let i = 0; i < prevState.length; i++)
      // {
      //   const currentBox = prevState[i]
      //   if(currentBox.id === id)
      //   {
      //     const updatedBox = {
      //       ...currentBox,
      //       on: !currentBox.on
      //     }

      //     newBoxes.push(updatedBox)
      //   }
      //   else {
      //     newBoxes.push(currentBox)
      //   }
      // }

      // return newBoxes
    })
  }

  const boxElements = boxes.map(box => {
    return (
      <Box
        key={box.id}
        id={box.id}
        on={box.on}
        handleClick={handleBoxClick}
      />
    )
  }) 

  return (
    <div>
      <main>
        {boxElements}
      </main>
    </div>
  );
}
