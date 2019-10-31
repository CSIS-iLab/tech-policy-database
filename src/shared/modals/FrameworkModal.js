import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import './Modal.css'
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
    <aside className="modal">
      <ModalHeader title={name} onClose={onClose} />
      <div className="modal__content">
        <section>
          <h5 className="modal__subtitle">organization</h5>
          <p className="modal__element">{organization}</p>
          <a
            className="modal__org-link"
            href={website.url}
            alt="organization link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {website.name} &nbsp;
            <Icon onClick={null} icon={'external_link'} />
          </a>
          <h5 className="modal__subtitle">year</h5>
          <p className="modal__element">{year}</p>
          <h5 className="modal__subtitle">also known as</h5>
          <div
            className="modal__aka"
            dangerouslySetInnerHTML={createMarkup(also_known_as)}
          />
        </section>
        <div className="modal__divider" />
        <section>
          <h5 className="modal__subtitle">members</h5>
          <p className="modal__element">{members.description}</p>
          <ul className="modal__mem-list">
            {members.list.map((member, i) => (
              <li className="mem-list-item" key={i}>
                {member}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <ModalFooter link={url} />
    </aside>
  ) : null
}

export default FrameworkModal
