import React from "react"

export default function Box(props) {
  console.log(props)
  const styles = {
    backgroundColor: props.on ? "gray" : "wheat",
  }
  console.log(styles)
  return (
    <div
      style={styles}
      onClick={() => props.toggle(props.id)}
      className="box"
    ></div>
  )
}
