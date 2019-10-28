import React from 'react'
import Icon from '../site-config/Icon'

const CustomFilter = (props) => {
  const handleClick = () => {
    props.setFilterModalStatus(true)
  }

  return (
    <div>
      <button onClick={handleClick}><Icon onClick={null} icon={'filter2'}/>Filter</button>
    </div>
  )
}

export default CustomFilter