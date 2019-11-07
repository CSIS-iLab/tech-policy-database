import React from 'react'
import { ReactComponent as Logo } from '../../assets/csis_logo_white_long.svg'

const Footer = () => {
  const renderDate = () => {
    return new Date().getFullYear()
  }

  return (
    <footer className="site-footer container">
      <div className="site-footer__content">
        <div className="site-footer__logo">
          <a href="https://www.csis.org" alt="CSIS website">
            <Logo
              className="csis-link__logo"
              alt="Center for Strategic and International Studies"
              title="Center for Strategic and International Studies"
            />
          </a>
        </div>
        <p className="site-footer__copyright">
          All content © {renderDate()}. All rights reserved.&nbsp;
            <a href="https://www.csis.org/privacy-policy" alt="Privacy Policy" className="site-footer__privacy-pol">
            Privacy Policy
            </a>
        </p>
      </div>
      <div className="site-footer__desc">
        <p>
          This is a product of the&nbsp;
            <a
            href="https://www.csis.org/programs/dracopoulos-ideas-lab"
            alt="iDeas Lab"
          >
            Andreas C. Dracopoulos iDeas Lab
            </a>
          , the in-house digital, multimedia, and design agency at the Center
          for Strategic and International Studies.
          </p>
      </div>
      <div className="site-footer__contact">
        <a
          className="site-footer__website"
          href="https://www.csis.org"
          alt="CSIS website"
        >
          www.csis.org
          </a>
        <address className="site-footer__address">
          1616 Rhode Island Avenue, NW Washington, DC 20036
          </address>
      </div>
    </footer>
  )
}

export default Footer
