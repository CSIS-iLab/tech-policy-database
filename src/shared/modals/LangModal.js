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
    <aside className="modal">
      <ModalHeader title={'Original Language'} onClose={onClose} />
      <section className="modal__content">
        <dt className="modal__subtitle">framework</dt>
        <dd className="modal__element">{framework}</dd>
        <dt className="modal__subtitle">category</dt>
        <dd className="modal__element">{category}</dd>
        <div
          className="modal__orig-lang"
          dangerouslySetInnerHTML={createMarkup(original_lang)}
        />
      </section>
      <ModalFooter link={link} />
    </aside>
  ) : null
}

export default LangModal
