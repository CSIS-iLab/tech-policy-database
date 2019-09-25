import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'

const TableCell = (props) => {
  const context = useContext(shopContext)

  const handleClick = () => {
    context.setLangModalStatus(true)
    context.setActiveOriginalLang(props.content[1].original_lang)
  }

  return typeof props.content[1] !== 'object' ? (
    <td>
      <div>{props.content[0]}</div>
    </td>
  ) : (
    <td>
      <div>{props.content[1].abbreviated_lang}</div>
      <div onClick={handleClick}>View Original Language</div>
    </td>
  )
}

export default TableCell
