import React from 'react'

/* without importing to app.js */

/* // simple function creation scenario
function Todo() {
  return (
    <div>
      <p>Todo title</p>
      <p>Todo desc</p>
    </div>
  )
} */

/* creating react function under the hood */
const ReactCreateElement = () => {
  return React.createElement("div", {}, React.createElement("p", {}, "Todo title"),
  React.createElement("p", {}, "Todo desc"))
}

export default ReactCreateElement