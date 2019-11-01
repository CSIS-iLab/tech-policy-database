import React from 'react'
import Icon from './Icon'

const SocialShare = () => {
  return (
    <ul className="share">
      <li className="share-item">
        <a
          href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
        >
          <Icon icon={'facebook'} />
        </a>
      </li>
      <li className="share-item">
        <a
          href={`https://twitter.com/intent/tweet?url=${window.location.href}&amp;via=CSIS&amp;related=CSIS`}
        >
          <Icon icon={'twitter'} />
        </a>
      </li>
      <li className="share-item">
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&source=CSIS`}
        >
          <Icon icon={'linkedin'} />
        </a>
      </li>
      <li className="share-item">
        <a href={`mailto:techpolicy@csis.org?subject=${document.title}`}>
          <Icon icon={'email'} />
        </a>
      </li>
      <li className="share-item">
        <button onClick={() => window.print()} className="share-print">
          <Icon icon={'print'} />
        </button>
      </li>
    </ul>
  )
}

export default SocialShare
