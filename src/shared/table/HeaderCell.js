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
    <td>Categories</td>
  ) : (
    <td>
      <div onClick={handleClick}>
        <span>{name}</span>
        <span>
          <Icon handleClick={null} icon={'info'} />
        </span>
      </div>
      <div>{organization}</div>
      <span>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Icon onClick={null} icon={'external_link'} />
          Original Document
        </a>
      </span>
    </td>
  )
}

export default HeaderCell
