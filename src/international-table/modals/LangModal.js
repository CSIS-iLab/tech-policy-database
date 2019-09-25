import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import './Modal.css'

const LangModal = () => {
  const context = useContext(shopContext)

  const handleClick = () => {
    context.setLangModalStatus(false)
  }

  return context.langModalStatus ? (
    <div className="modal-overlay" onClick={handleClick}>
      <div className="modal-content">
        <div className="modal-title">Original Language</div>
        <div className="modal-body">{context.activeOriginalLang}</div>
        <br />
        <span className="modal-footer">
          <a href={context.allHeaders.url} target="_blank">
            Original Document
          </a>
        </span>
      </div>
    </div>
  ) : null
}

export default LangModal
