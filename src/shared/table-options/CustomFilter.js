import React from 'react'

const CustomFilter = (props) => {
  const handleClick = () => {
    props.setFilterModalStatus(true)
  }

  return (
    <div>
      <button onClick={handleClick}>Filter</button>
    </div>
  )
}

export default CustomFilter