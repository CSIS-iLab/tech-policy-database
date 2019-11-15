import React, { useContext } from 'react'
import Icon from '../site-config/Icon'
import { GlobalContext } from '../../context/GlobalContext'

const TableCell = (props) => {
  const {
    allHeaders,
    allRows,
    filteredHeaders,
    setLangModalStatus,
    setLangModalData
  } = useContext(GlobalContext)

  const framework = props.content[0]
  const catObj = props.content[1]

  const handleClick = (e) => {
    const langModalObj = {
      framework: allHeaders.find((h) => h.name === framework).name,
      category: catObj.row_title,
      original_lang: catObj.original_lang
    }
    setLangModalData(langModalObj)

    setLangModalStatus(true)
  }

  const renderOriginalLang = () => {
    return catObj.original_lang !== '' ? (
      <button
        className="btn btn--transparent-light btn--xs btn--icon cell__orig-lang"
        onClick={handleClick}
      >
        <Icon icon={'eye'} />
        View Original Language
      </button>
    ) : null
  }

  const createMarkup = (lang) => {
    return { __html: lang }
  }

  // Conditionally renders cells based on position in the table and the presence of data
  const renderCell = () => {
    if (typeof catObj === 'string' && catObj.length === 1) {
      return (
        <td className="table__cell--collection" colSpan={filteredHeaders.length}>
          {props.content}
        </td>
      )
    } else if (typeof catObj !== 'object') {
      let catDesc = allRows.find((r) => r[0][0] === framework)[0][1]
      return (
        <th className="table__cell table__cell--body" scope="row">
          <div className="cell__category">{framework}</div>
          <p className="cell__desc">{catDesc}</p>
        </th>
      )
    } else if (catObj.has_data) {
      return (
        <td className="table__cell table__cell--body">
          <div
            className="cell__abbrev-lang"
            dangerouslySetInnerHTML={createMarkup(catObj.abbreviated_lang)}
          />
          {renderOriginalLang()}
        </td>
      )
    } else if (!catObj.has_data) {
      return (
        <td className="table__cell table__cell--body table__cell--body-no-data">
          {catObj.default_lang} {renderOriginalLang()}
        </td>
      )
    }
  }

  return <React.Fragment>{renderCell()}</React.Fragment>
}

export default TableCell
