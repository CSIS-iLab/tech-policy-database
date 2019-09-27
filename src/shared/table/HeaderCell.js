import React from 'react'

const HeaderCell = (props) => {
  return (
    props.content.name === 'Categories' ?
      <td>Categories</td>
      :
      <td>
        <div>{props.content.name}</div>
        <div>{props.content.year}</div>
        <span>
          <a href={props.content.url} target="_blank" rel="noopener noreferrer">
            Original Document
          </a>
        </span>
      </td>
  )
}

export default HeaderCell
