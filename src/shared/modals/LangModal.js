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
      <div className="modal__content">
        <section>
          <h5 className="modal__subtitle">framework</h5>
          <p className="modal__element">{framework}</p>
          <h5 className="modal__subtitle">category</h5>
          <p className="modal__element">{category}</p>
        </section>
        <section>
          <div className="modal__divider" />
          <div
            className="modal__orig-lang"
            dangerouslySetInnerHTML={createMarkup(original_lang)}
          />
        </section>
      </div>
      <ModalFooter link={link} />
    </aside>
  ) : null
}

export default LangModal
