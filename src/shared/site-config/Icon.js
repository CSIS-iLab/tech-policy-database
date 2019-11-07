import React from 'react'

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
