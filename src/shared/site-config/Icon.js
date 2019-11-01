import React from 'react'
import '../../app/App.css'

const Icon = (props) => {
  const name = props.icon

  return (
    <svg className={`icon icon-${name}`} title={name}>
      <use
        xlinkHref={`${process.env.PUBLIC_URL}/symbol-defs.svg#icon-${name}`}
      />
    </svg>
  )
}

export default Icon
