import React from 'react'

const HeaderCell = (props) => {
  const { name, url, year } = props.content
  return (
    name === 'Categories' ?
      <td>Categories</td>
      :
      <td>
        <div>{name}</div>
        <div>{year}</div>
        <span>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Original Document
          </a>
        </span>
      </td>
  )
}

export default HeaderCell
