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
    <th className="table__header">Categories</th>
  ) : (
      <th className="table__header">
        <div className="table__header-title" onClick={handleClick}>
          <span className="table__header-framework">{name}</span>
          <span className="table__header-icon">
            <Icon handleClick={null} icon={'info'} />
          </span>
        </div>
        <div className="table__header-org">{organization}</div>
        <div className="table__header-doc">
          <a
            className="table__header-doc-link"
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
