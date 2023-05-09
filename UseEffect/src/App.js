import React from "react"

function App() {

  const [count, setCount] = React.useState(1)
  const [starWarsData, setStarWarsData] = React.useState({})

  React.useEffect(function () {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])

  function handleCount()
  {
    setCount(prevCount => ( prevCount + 1 ))
  }

  return (
    <div>
      <h2>The count is {count} </h2>
      <button onClick={handleCount}>Count</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default App;
