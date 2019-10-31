import React from 'react'
import Icon from '../site-config/Icon'

const ModalHeader = (props) => {
  const { title, onClose } = props

  return (
    <div className="modal__header">
      <span>{title}</span>
      <button onClick={onClose}>
        <Icon icon={'close'} />
      </button>
    </div>
  )
}

export default ModalHeader
