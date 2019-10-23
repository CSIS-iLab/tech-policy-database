import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import './Modal.css'

const LangModal = () => {
  const { setLangModalStatus, langModalStatus, activeOriginalLang, docLink } = useContext(GlobalContext)

  const handleClick = () => {
    setLangModalStatus(false)
  }

  const createMarkup = (lang) => {
    return { __html: lang }
  }

  return langModalStatus ? (
    <div className="modal">
      <div className="modal__header">
        Original Language
        <span className="modal__close" onClick={handleClick}>
          X
        </span>
      </div>
      <div
        className="modal__content"
        dangerouslySetInnerHTML={createMarkup(activeOriginalLang)}
      ></div>
      <div className="modal__footer">
        <a
          href={docLink}
          alt="original document"
          target="_blank"
          rel="noopener noreferrer"
        >
          Original Document
        </a>
      </div>
    </div>
  ) : null
}

export default LangModal
