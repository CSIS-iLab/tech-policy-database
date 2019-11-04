import React, { useState } from 'react'
import Icon from '../site-config/Icon'

const ScrollBar = () => {
  const [scrollPos, setScrollPos] = useState(0)

  const scrollLeft = () => {
    let wrapper = document.getElementsByClassName('table__wrapper')[0]

    wrapper.scrollTo(scrollPos - 300, 0)

    if (scrollPos - 300 < 0) {
      setScrollPos(0)
    } else {
      setScrollPos(scrollPos - 300)
    }
  }

  const scrollRight = () => {
    let wrapper = document.getElementsByClassName('table__wrapper')[0]
    let maxScroll =
      document.getElementsByTagName('table')[0].offsetWidth -
      wrapper.offsetWidth

    wrapper.scrollTo(scrollPos + 300, 0)

    if (scrollPos + 300 > maxScroll) {
      setScrollPos(maxScroll)
    } else {
      setScrollPos(scrollPos + 300)
    }
  }

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
