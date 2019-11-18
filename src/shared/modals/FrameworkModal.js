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

  return frameModalStatus ? (
    <React.Fragment>
      <div className="modal__overlay"></div>
      <aside className="modal">
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
                  href={website.url}
                  title="Visit this organization's website"
                >
                  {website.name}
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
                {members.description}

                <ul className="modal__mem-list">
                  {members.list.map((member, i) => (
                    <li className="mem-list-item" key={i}>
                      {member}
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
          </div>
        </section>
        <ModalFooter link={url} />
      </aside>
    </React.Fragment>
  ) : null
}

export default FrameworkModal
