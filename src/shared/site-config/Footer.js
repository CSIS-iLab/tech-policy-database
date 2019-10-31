import React, { useContext } from 'react'
import { ReactComponent as Logo } from '../../assets/csis_logo_white_long.svg'
import { GlobalContext } from '../../context/GlobalContext'
import Icon from '../site-config/Icon'

const Footer = () => {
  const { siteInfo } = useContext(GlobalContext)

  const { methodology, program_description } = siteInfo

  const renderDate = () => {
    return new Date().getFullYear()
  }

  return (
    <footer className="site-footer">
      <section id="methodology" className="site-footer__explanation">
        <h2 className="site-footer__title">Methodology</h2>
        <div className="site-footer__info">
          <p className="site-footer__methodology">{methodology}</p>
          <p className="site-footer__prog-desc">{program_description}</p>
        </div>
      </section>
      <section className="site-footer__about">
        <section className="site-footer__content">
          <div className="site-footer__logo">
            <a
              href="https://www.csis.org"
              target="_blank"
              rel="noopener noreferrer"
              alt="CSIS website"
            >
              <Logo
                className="csis-link__logo"
                alt="Center for Strategic and International Studies"
                title="Center for Strategic and International Studies"
              />
            </a>
          </div>
          <p className="site-footer__copyright">
            All content © {renderDate()}. All rights reserved.
          </p>
          <p className="site-footer__privacy-pol">
            <a
              href="https://www.csis.org/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              alt="Privacy Policy"
            >
              Privacy Policy
            </a>
          </p>
        </section>
        <section className="site-footer__desc">
          <p>
            This is a product of the&nbsp;
            <a
              href="https://www.csis.org/programs/dracopoulos-ideas-lab"
              target="_blank"
              rel="noopener noreferrer"
              alt="iDeas Lab"
            >
              Andreas C. Dracopoulos iDeas Lab
            </a>
            , the in-house digital, multimedia, and design agency at the Center
            for Strategic and International Studies.
          </p>
        </section>
        <div className="site-footer__contact">
          <a
            className="site-footer__website"
            href="https://www.csis.org"
            target="_blank"
            rel="noopener noreferrer"
            alt="CSIS website"
          >
            www.csis.org
          </a>
          <address className="site-footer__address">
            1616 Rhode Island Avenue, NW Washington, DC 20036
          </address>
        </div>
        <button
          aria-label="back to top"
          className="back-to-top sticky"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Icon onClick={null} icon={'arrow_up'} />
        </button>
      </section>
    </footer>
  )
}

export default Footer
