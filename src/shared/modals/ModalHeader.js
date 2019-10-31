import React from 'react'
import Icon from '../site-config/Icon'

const ModalHeader = (props) => {
  const { title, onClose } = props

  return (
    <header className="modal__header">
      <h2 className="modal__title">{title}</h2>
      <button onClick={onClose}>
        <Icon icon={'close'} />
      </button>
    </header>
  )
}

export default ModalHeader
