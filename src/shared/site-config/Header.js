import React, { useContext } from 'react'
import SocialShare from './SocialShare'
import { ReactComponent as Logo } from '../../assets/csis_logo_white_short.svg'
import { GlobalContext } from '../../context/GlobalContext'
import Icon from './Icon'

const Header = () => {
  const { siteInfo } = useContext(GlobalContext)

  const { subject, program_name, download_file, intro_paragraph } = siteInfo

  const renderDownloadFile = () => {
    if (download_file === undefined) {
      return ''
    } else {
      return download_file
    }
  }

  return (
    <header className="site-header">
      <section className="site-header__banner">
        <div className="site-header__logo">
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
        <div className="site-header__nav" role="navigation">
          <SocialShare />
        </div>
      </section>
      <section className="site-header__title">
        <div className="site-header__program">{program_name}</div>
        <div className="site-header__subject">{subject}</div>
      </section>
      <section className="site-header__info">
        <div className="site-header__intro">
          <p>{intro_paragraph}</p>
        </div>
        <section className="site-header__actions">
          <a className="site-header__methodology" href="#Methodology">
            Methodology
            <Icon onClick={null} icon={'arrow'} />
          </a>
          <a className="site-header__download" href={renderDownloadFile().url}>
            Download the data
            <Icon onClick={null} icon={'download'} />
          </a>
          <p className="site-header__download-desc">
            {renderDownloadFile().description}
          </p>
        </section>
      </section>
    </header>
  )
}

export default Header
