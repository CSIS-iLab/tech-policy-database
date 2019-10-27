import React from 'react'
import Icon from '../site-config/Icon'

const ModalFooter = (props) => {
  const { link } = props

  return (
    <div className="modal__footer">
      <a
        href={link}
        alt="original document"
        target="_blank"
        rel="noopener noreferrer"
      >
        Original Framework Document
        <Icon onClick={null} icon={'external_link'} />
      </a>
    </div>
  )
}

export default ModalFooter
