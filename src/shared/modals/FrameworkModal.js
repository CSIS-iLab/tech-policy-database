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
      <section className="modal__content">
        <dl>
          <dt className="modal__subtitle">organization</dt>
          <dd className="modal__element">{organization}</dd>
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
          <dt className="modal__subtitle">year</dt>
          <dd className="modal__element">{year}</dd>
          <dt className="modal__subtitle">also known as</dt>
          <div
            className="modal__aka"
            dangerouslySetInnerHTML={createMarkup(also_known_as)}
          />
          <dt className="modal__subtitle">members</dt>
          <dd className="modal__element">{members.description}</dd>
          <ul className="modal__mem-list">
            {members.list.map((member, i) => (
              <li className="mem-list-item" key={i}>
                {member}
              </li>
            ))}
          </ul>
        </dl>
      </section>
      <ModalFooter link={url} />
    </aside>
  ) : null
}

export default FrameworkModal
