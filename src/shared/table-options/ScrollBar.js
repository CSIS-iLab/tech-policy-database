import React, { useState, useEffect } from 'react'
import Icon from '../site-config/Icon'
import smoothscroll from 'smoothscroll-polyfill'

const ScrollBar = () => {
  const scrollOffset = 250
  const [scrollPos, setScrollPos] = useState(0)

  const scrollLeft = () => {
    setScrollPos(scrollPos - scrollOffset)
  }

  const scrollRight = () => {
    setScrollPos(scrollPos + scrollOffset)
  }

  useEffect(() => {
    const wrapper = document.getElementById('table-container')
    const table = document.getElementById('table')
    const maxScroll = table.offsetWidth - wrapper.offsetWidth
    const btnLeft = document.getElementById('scroll-left-btn')
    const btnRight = document.getElementById('scroll-right-btn')

    smoothscroll.polyfill()
    wrapper.scrollTo(scrollPos, 0)

    if (scrollPos <= 0) {
      setScrollPos(0)
      btnLeft.disabled = true
    } else if (scrollPos >= maxScroll) {
      setScrollPos(maxScroll)
      btnRight.disabled = true
    } else {
      btnRight.disabled = false
      btnLeft.disabled = false
    }
  }, [scrollPos])

  return (
    <div className="table__scroll">
      <button
        id="scroll-left-btn"
        className="scroll-btn btn btn--scroll btn--square"
        aria-label="Scroll table to the left"
        onClick={scrollLeft}
      >
        <Icon icon={'arrow-chev-left'} />
      </button>
      <button
        id="scroll-right-btn"
        className="scroll-btn btn btn--scroll btn--square"
        aria-label="Scroll table to the right"
        onClick={scrollRight}
      >
        <Icon icon={'arrow-chev-right'} />
      </button>
    </div>
  )
}

export default ScrollBar
