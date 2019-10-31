import React from 'react'
import Icon from '../site-config/Icon'

const ModalFooter = (props) => {
  const { link } = props

  return (
    <footer className="modal__footer">
      <a
        className="modal__doc-link"
        href={link}
        title="View the original document."
      >
        Original Framework Document
        <Icon onClick={null} icon={'external_link'} />
      </a>
    </footer>
  )
}

export default ModalFooter
