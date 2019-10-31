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
    <th className="table__cell table__cell--header">Categories</th>
  ) : (
    <th className="table__cell table__cell--header">
      <button className="header-cell__title" onClick={handleClick}>
        {name}
        <Icon handleClick={null} icon={'info'} />
      </button>
      <p className="header-cell__org">{organization}</p>
      <a className="header-cell__doc-link" href={url}>
        <Icon icon={'external_link'} />
        Original Document
      </a>
    </th>
  )
}

export default HeaderCell
