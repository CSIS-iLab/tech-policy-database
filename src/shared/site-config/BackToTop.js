import React from 'react'
import Icon from '../site-config/Icon'

const BackToTop = () => {
  return (
    <button
      aria-label="back to top"
      className="back-to-top sticky"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icon icon={'arrow-up'} />
    </button>
  )
}

export default BackToTop
