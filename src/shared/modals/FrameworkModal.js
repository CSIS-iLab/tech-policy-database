import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Icon from '../site-config/Icon'
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'

const FrameworkModal = () => {
  const { setFrameModalStatus, frameModalStatus, activeFramework } = useContext(
    GlobalContext
  )

  const {
    name,
    url,
    organization,
    website,
    also_known_as,
    year,
    members
  } = activeFramework

  const onClose = () => {
    setFrameModalStatus(false)
  }

  const createMarkup = (lang) => {
    return { __html: lang }
  }

  const renderClass = () => {
    return frameModalStatus ? 'modal' : 'modal modal--hidden'
  }

  return (
    <React.Fragment>
      {frameModalStatus ? <div className="modal__overlay"></div> : null}
      <aside className={renderClass()}>
        <ModalHeader title={name} onClose={onClose} />
        <section className="modal__content">
          <div className="modal__content-wrapper">
            <dl>
              <dt className="modal__subtitle">Organization</dt>
              <dd className="modal__value">
                {organization}
                <br />
                <a
                  className="modal__org-link"
                  href={website ? website.url : null}
                  title="Visit this organization's website"
                >
                  {website ? website.name : null}
                  <Icon icon={'external-link'} />
                </a>
              </dd>
              <dt className="modal__subtitle">Year</dt>
              <dd className="modal__value">{year}</dd>
              <dt className="modal__subtitle">Also Known As</dt>
              <dd
                className="modal__value modal__value--aka"
                dangerouslySetInnerHTML={createMarkup(also_known_as)}
              ></dd>
              <dt className="modal__subtitle modal__subtitle--members">
                Members
              </dt>
              <dd className="modal__value">
                {members ? members.description : null}

                {members ?
                  <div className="modal__mem-list"
                    dangerouslySetInnerHTML={createMarkup(members.list)} />
                  : null}

              </dd>
            </dl>
          </div>
        </section>
        <ModalFooter link={url} />
      </aside>
    </React.Fragment>
  )
}

export default FrameworkModal
