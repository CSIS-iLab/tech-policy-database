import React from 'react'
import Icon from '../site-config/Icon'

const ModalHeader = (props) => {
  const { title, onClose } = props

  return (
    <div className="modal__header">
      <span>{title}</span>
      <Icon onClick={onClose} icon={'close'} />
    </div>
  )
}

export default ModalHeader
