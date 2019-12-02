import React, { useEffect, useState } from 'react'
import TableOptions from '../table-options/TableOptions'
import DataTable from './DataTable'

const TableContainer = (props) => {
  const { headers, rows } = props
  let [scrollPos, setScrollPos] = useState(0)
  let [isTicking, setIsTicking] = useState(false)

  let options, wrapperOffset, lastKnownScrollPos

  const onScroll = () => {
    lastKnownScrollPos = window.scrollY
    requestTick()
  }

  /**
   * Calls rAF if it's not already
   * been done already
   */
  function requestTick() {
    if (!isTicking) {
      requestAnimationFrame(update)
      setIsTicking(true)
    }
  }

  function update() {
    console.log(wrapperOffset)
    console.log(scrollPos)
    if (lastKnownScrollPos >= wrapperOffset) {
      console.log('scroll now')
      setScrollPos(lastKnownScrollPos - wrapperOffset)
    } else {
      // setScrollPos(0)
    }

    // allow further rAFs to be called
    setIsTicking(false)
  }

  useEffect(() => {
    // code to run on component mount
    options = document.querySelector('.table__options')
    wrapperOffset = options.offsetTop
    window.addEventListener('scroll', onScroll, false)
  }, [])

  const style = { '--yPos': scrollPos + 'px' }

  return (
    <section className="datatable" style={style}>
      <TableOptions />
      <DataTable headers={headers} rows={rows} />
    </section>
  )
}

export default TableContainer
