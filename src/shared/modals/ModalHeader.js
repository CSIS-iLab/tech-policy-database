import React from 'react'
import Icon from '../site-config/Icon'

const ModalHeader = (props) => {
  const { title, onClose } = props

  return (
    <section className="modal__header">
      <span className="modal__title">{title}</span>
      <Icon onClick={onClose} icon={'close'} />
    </section>
  )
}

export default ModalHeader
