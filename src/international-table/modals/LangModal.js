import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import './Modal.css'

const LangModal = () => {
  const context = useContext(shopContext)

  const handleClick = () => {
    context.setLangModalStatus(false)
  }

  const createMarkup = (lang) => {
    return { __html: lang }
  }

  return context.langModalStatus ? (
    <div className="lang-modal">
      <div className="lang-modal__header">
        Original Language
        <span className="lang-modal__close" onClick={handleClick}>
          X
        </span>
      </div>
      <div
        className="lang-modal__content"
        dangerouslySetInnerHTML={createMarkup(context.activeOriginalLang)}
      ></div>
      <div className="lang-modal__footer">
        <a
          href={context.docLink}
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
