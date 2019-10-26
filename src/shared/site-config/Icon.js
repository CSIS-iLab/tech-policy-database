import React from 'react'
import iconList from '../../assets/iconList.json'
import '../../app/App.css'

const Icon = (props) => {
  const icon = iconList[props.icon]

  return (
    <svg
      className={`icon ${icon.title}`}
      onClick={props.onClick}
      title={icon.title}
      width={icon.width}
      height={icon.height}
      viewBox={icon.viewBox}
    >
      <path d={icon.d}></path>
    </svg>
  )
}

export default Icon
