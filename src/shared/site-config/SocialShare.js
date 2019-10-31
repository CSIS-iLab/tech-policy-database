import React from 'react'
import Icon from './Icon'

const SocialShare = () => {
  return (
    <ul className="share">
      <li className="share__item">
        <a
          href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon onClick={null} icon={'facebook'} />
        </a>
      </li>
      <li className="share__item">
        <a
          href={`https://twitter.com/intent/tweet?url=${window.location.href}&amp;via=CSIS&amp;related=CSIS`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon onClick={null} icon={'twitter'} />
        </a>
      </li>
      <li className="share__item">
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&source=CSIS`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon onClick={null} icon={'linkedin'} />
        </a>
      </li>
      <li className="share__item">
        <a href={`mailto:techpolicy@csis.org?subject=${document.title}`}>
          <Icon onClick={null} icon={'email'} />
        </a>
      </li>
      <li className="share__item">
        <div onClick={() => window.print()}>
          <Icon onClick={null} icon={'print'} />
        </div>
      </li>
    </ul>
  )
}

export default SocialShare
