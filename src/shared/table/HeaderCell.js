import React from 'react'

const HeaderCell = (props) => {
  return (
    <td>
      <div>{props.content.name}</div>
      <div>{props.content.year}</div>
      {props.content.name !== 'Categories' ? (
        <span>
          <a href={props.content.url} target="_blank">
            Original Document
          </a>
        </span>
      ) : null}
    </td>
  )
}

export default HeaderCell
