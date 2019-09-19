import React, { useContext } from 'react'
import shopContext from "../../context/shop-context";
import "./App.css"

const TextResize = () => {
  const context = useContext(shopContext);

  // const resize = (size) => {
  //   let txt = context.allRows
  //   let style = window.getComputedStyle(txt, null).getPropertyValue('font-size')
  //   let currentSize = parseFloat(style)
  //   txt.style.fontSize = (currentSize + size) + 'px'
  //   return console.log('text')
  // }

  const resize = (multiplier) => {
    if (document.body.style.fontSize == "2.0em") {
      document.body.style.fontSize = "1.0em"
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em"
  }

  return (
    <input type="image" value="Increase text size" src="/letter.png" id="letter" onClick={resize(1)} />
    // <input type="image" value="Increase text size" src="/letter.png" id="letter" onClick={resize(-1)} />
  )
}

export default TextResize