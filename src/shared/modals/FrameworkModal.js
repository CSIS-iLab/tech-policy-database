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
        <div>ORGANIZATION</div>
        <div>{organization}</div>
        <a
          href={website.url}
          alt="organization link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {website.name} &nbsp;
          <Icon onClick={null} icon={'external_link'} />
        </a>
        <div>YEAR</div>
        <div>{year}</div>
        <div>ALSO KNOWN AS</div>
        <div dangerouslySetInnerHTML={createMarkup(also_known_as)} />
        <div className="divider2" />
        <div>MEMBERS</div>
        <div>{members.description}</div>
        {members.list.map((member, i) => (
          <div key={i}>{member}</div>
        ))}
      </div>
      <ModalFooter link={url} />
    </aside>
  ) : null
}

export default FrameworkModal
