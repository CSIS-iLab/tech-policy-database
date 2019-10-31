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
        <div>FRAMEWORK</div>
        <div>{framework}</div>
        <div>CATEGORY</div>
        <div>{category}</div>
        <div className="divider2" />
        <div dangerouslySetInnerHTML={createMarkup(original_lang)} />
      </div>
      <ModalFooter link={link} />
    </aside>
  ) : null
}

export default LangModal
