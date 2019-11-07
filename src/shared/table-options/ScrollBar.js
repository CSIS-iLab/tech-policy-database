import React, { useState, useEffect } from 'react'
import Icon from '../site-config/Icon'

const ScrollBar = () => {

  const [scrollPos, setScrollPos] = useState(0)

  const scrollLeft = () => {
    let table = document.getElementsByClassName('table__container')[0]
    let btnLeft = document.getElementsByClassName('btn')[0]

    table.scrollTo(scrollPos - 300, 0)

    if (scrollPos - 300 < 0) {
      setScrollPos(0)
      btnLeft.disabled = true
    } else {
      setScrollPos(scrollPos - 300)
      btnLeft.disabled = false
    }
  }

  const scrollRight = () => {
    let table = document.getElementsByClassName('table__container')[0]
    let maxScroll = document.getElementsByTagName('table')[0].offsetWidth - table.offsetWidth
    let btnRight = document.getElementsByClassName('btn')[1]

    table.scrollTo(scrollPos + 300, 0)

    if (scrollPos + 300 > maxScroll) {
      setScrollPos(maxScroll)
      btnRight.setAttribute('disabled', true)
    } else {
      setScrollPos(scrollPos + 300)
      btnRight.setAttribute('disabled', false) 
    }
  }

  // useEffect(() => {
      // combine scrolls here
  // }, scrollPos)


  
  return (
    <div className="table__scroll">
      <button
        className="scroll-btn btn btn--scroll btn--square"
        onClick={scrollLeft}
      >
        <Icon icon={'arrow-chev-left'} />
      </button>
      <button
        className="scroll-btn btn btn--scroll btn--square"
        onClick={scrollRight}
      >
        <Icon icon={'arrow-chev-right'} />
      </button>
    </div>
  )
}

export default ScrollBar
