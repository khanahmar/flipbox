import "./App.css"
import Data from "./data.js"
import Box from "./Box.js"
import React from "react"

function App() {
  const [boxData, setBoxData] = React.useState(Data)

  function toggle(id) {
    setBoxData((prevData) => {
      return prevData.map((item) =>
        item.id === id ? { ...item, on: !item.on } : { ...item }
      )
    })
  }

  const boxes = boxData.map((box) => {
    return <Box on={box.on} id={box.id} toggle={toggle} />
  })

  return <div className="App">{boxes}</div>
}

export default App
