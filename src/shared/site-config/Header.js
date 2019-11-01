import React from 'react'
import SocialShare from './SocialShare'
import { ReactComponent as Logo } from '../../assets/csis_logo_white_short.svg'

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__logo">
        <a href="https://www.csis.org" alt="CSIS website">
          <Logo
            className="csis-link__logo"
            alt="Center for Strategic and International Studies"
            title="Center for Strategic and International Studies"
          />
          <span className="site-header__logo-divider">|</span> Explore The Data
        </a>
      </div>
      <SocialShare />
    </header>
  )
}

export default Header
