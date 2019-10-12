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
    <div className="lang-modal">
      <div className="lang-modal__header">
        Original Language
        <span className="lang-modal__close" onClick={handleClick}>
          X
        </span>
      </div>
      <div
        className="lang-modal__content"
        dangerouslySetInnerHTML={createMarkup(activeOriginalLang)}
      ></div>
      <div className="lang-modal__footer">
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
