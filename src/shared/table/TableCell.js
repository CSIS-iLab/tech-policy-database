import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'

const TableCell = (props) => {
  const context = useContext(shopContext)

  const handleClick = () => {
    context.setLangModalStatus(true)
    context.setActiveOriginalLang(props.content[1].original_lang)
  }

  const renderOriginalLang = () => {
    return props.content[1].original_lang !== "" ?
      <div onClick={handleClick}>View Original Language</div>
      :
      null
  }

  const createMarkup = (lang) => {
    return { __html: lang }
  }

  const renderCell = () => {
    if (typeof props.content[1] !== 'object') {
      let catDesc = context.catData.find(c => c[1].title === props.content[0]).description
      return (
        <td>
          <div>{props.content[0]}</div>
          <div>{catDesc}</div>
        </td>
      )
    } else if (props.content[1].has_data) {
      return (
        <td>
          <div className="abbrev-cell" dangerouslySetInnerHTML={createMarkup(props.content[1].abbreviated_lang)} />
          {renderOriginalLang()}
        </td>
      )
    } else if (!props.content[1].has_data) {
      return (
        <td>
          <div className="default-lang-cell">{props.content[1].default_lang}</div>
          {renderOriginalLang()}
        </td>
      )
    }
  }

  return (
    <React.Fragment>
      {renderCell()}
    </React.Fragment>
  )
}

export default TableCell
