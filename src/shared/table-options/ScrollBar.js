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
    <div>
      <button onClick={scrollLeft}><Icon onClick={null} icon={'arrow_chev_left'}/></button>
      <button onClick={scrollRight}><Icon onClick={null} icon={'arrow_chev_right'}/></button>
    </div>
  )
}

export default ScrollBar
