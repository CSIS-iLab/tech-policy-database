import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
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

  const renderClass = () => {
    return langModalStatus ? 'modal' : 'modal modal--hidden'
  }

  return (
    <React.Fragment>
      {langModalStatus ? <div className="modal__overlay"></div> : null}
      <aside className={renderClass()}>
        <ModalHeader title={'Original Language'} onClose={onClose} />
        <section className="modal__content">
          <div className="modal__content-wrapper">
            <dl>
              <dt className="modal__subtitle">Framework</dt>
              <dd className="modal__value">{framework}</dd>
              <dt className="modal__subtitle">Category</dt>
              <dd className="modal__value">{category}</dd>
            </dl>
            <div
              className="modal__orig-lang"
              dangerouslySetInnerHTML={createMarkup(original_lang)}
            />
          </div>
        </section>
        <ModalFooter link={link} />
      </aside>
    </React.Fragment>
  )
}

export default LangModal
