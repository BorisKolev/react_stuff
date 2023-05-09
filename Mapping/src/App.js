import React from "react"

export default function App() {

  // const arrayOfThings = ["Thing 1", "Thing 2"]

  // function addAThing()
  // {
  //   arrayOfThings.push(`Thing ${arrayOfThings.length+1}`)
  //   console.log(arrayOfThings)
  // }

  const [arrayOfThings, setArrayOfThings] = React.useState(["Thing 1", "Thing 2"])

  const arrayOfThingElements = arrayOfThings.map(thing => {
    return (<div key={thing}>{thing}</div>)
  })

  function addAThing()
  {
    setArrayOfThings(prevState => [...prevState, `Thing ${arrayOfThings.length+1}`])
  }

  return (
    <div>
      <button onClick={addAThing}> Add a thing </button>
      {arrayOfThingElements}
    </div>
  );
}
