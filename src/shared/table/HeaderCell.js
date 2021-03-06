import React, { useContext } from 'react'
import Icon from '../site-config/Icon'
import { GlobalContext } from '../../context/GlobalContext'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

const HeaderCell = (props) => {
  const {
    setFrameModalStatus,
    setActiveFramework,
    setLangModalStatus,
    setFilterModalStatus,
    filteredRows
  } = useContext(GlobalContext)

  const { name, url, organization } = props.content

  const handleClick = () => {
    setActiveFramework(props.content)
    setFrameModalStatus(true)
    setLangModalStatus(false)
    setFilterModalStatus(false)
  }

  const handleSearchErr = () => {
    return filteredRows.length > 0
      ? 'table__cell table__cell--header'
      : 'table__cell table__cell--header table__cell--hidden'
  }

  return name === 'Categories' ? (
    <th className="table__cell table__cell--header" scope="col">
      Categories
    </th>
  ) : (
    <th className={handleSearchErr()} scope="col">
      <Tippy content={<span>{name}</span>} placement="top" theme="light">
        <button className="header-cell__title" onClick={handleClick}>
          {name}
          <Icon handleClick={null} icon={'info'} />
        </button>
      </Tippy>
      <p className="header-cell__org">{organization}</p>
      <a
        className="header-cell__doc-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title="See original document"
      >
        <Icon icon={'external-link'} />
        Original Document
      </a>
    </th>
  )
}

export default HeaderCell
