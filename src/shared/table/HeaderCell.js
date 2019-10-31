import React, { useContext } from 'react'
import Icon from '../site-config/Icon'
import { GlobalContext } from '../../context/GlobalContext'

const HeaderCell = (props) => {
  const { setFrameModalStatus, setActiveFramework } = useContext(GlobalContext)

  const { name, url, organization } = props.content

  const handleClick = () => {
    setActiveFramework(props.content)
    setFrameModalStatus(true)
  }

  return name === 'Categories' ? (
    <th className="table__header-cell">Categories</th>
  ) : (
    <th className="table__header-cell">
      <button className="header-cell__title" onClick={handleClick}>
        <span className="header-cell__framework">{name}</span>
        <span className="header-cell__icon">
          <Icon handleClick={null} icon={'info'} />
        </span>
      </button>
      <div className="header-cell__org">{organization}</div>
      <div className="header-cell__doc">
        <a
          className="header-cell__doc-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon onClick={null} icon={'external_link'} />
          Original Document
        </a>
      </div>
    </th>
  )
}

export default HeaderCell
