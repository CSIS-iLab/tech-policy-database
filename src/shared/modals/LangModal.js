import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import './Modal.css'
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'

const LangModal = () => {
  const { setLangModalStatus, langModalStatus, langModalData } = useContext(
    GlobalContext
  )

  const { link, original_lang, framework, category } = langModalData

  const onClose = () => {
    setLangModalStatus(false)
  }

  const createMarkup = (lang) => {
    return { __html: lang }
  }

  return langModalStatus ? (
    <section className="modal">
      <ModalHeader title={'Original Language'} onClose={onClose} />
      <section className="modal__content">
        <h5 className="modal__subtitle">FRAMEWORK</h5>
        <p className="modal__element">{framework}</p>
        <h5 className="modal__subtitle">CATEGORY</h5>
        <p className="modal__element">{category}</p>
        <div className="modal__divider" />
        <div
          className="modal__orig-lang"
          dangerouslySetInnerHTML={createMarkup(original_lang)}
        />
      </section>
      <ModalFooter link={link} />
    </section>
  ) : null
}

export default LangModal
