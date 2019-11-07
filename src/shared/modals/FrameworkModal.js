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
    <aside className="modal">
      <ModalHeader title={name} onClose={onClose} />
      <section className="modal__content">
        <dl>
          <dt className="modal__subtitle">Organization</dt>
          <dd className="modal__value">
            {organization}
            <a
              className="modal__org-link"
              href={website.url}
              title="Visit this organization's website"
            >
              {website.name} &nbsp;
              <Icon icon={'external_link'} />
            </a>
          </dd>
          <dt className="modal__subtitle">Year</dt>
          <dd className="modal__value">{year}</dd>
          <dt className="modal__subtitle">Also Known As</dt>
          <dd
            className="modal__aka"
            dangerouslySetInnerHTML={createMarkup(also_known_as)}
          ></dd>
          <dt className="modal__subtitle">Members</dt>
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
      </section>
      <ModalFooter link={url} />
    </aside>
  ) : null
}

export default FrameworkModal
