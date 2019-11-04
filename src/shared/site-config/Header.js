import React from 'react'
import SocialShare from './SocialShare'
import { ReactComponent as Logo } from '../../assets/csis_logo_white_short.svg'

const Header = () => {
  return (
    <header className="site-header">
      <a href="https://www.csis.org" alt="CSIS website" className="site-header__logo">
        <Logo
          className="csis-link__logo"
          alt="Center for Strategic and International Studies"
          title="Center for Strategic and International Studies"
        />
        Explore The Data
        </a>
      <SocialShare />
    </header>
  )
}

export default Header
