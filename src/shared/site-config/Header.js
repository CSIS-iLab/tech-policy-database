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
    <div className="site-header">
      <div className="site-header__nav" role="navigation">
        <div className="site-logo">
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
        <SocialShare />
      </div>
      <div className="site-header__info">
        <div className="info-program">{program_name}</div>
        <div className="info-subject">{subject}</div>
      </div>
      <div className="site-header__intro">
        <div className="intro-paragraph">{intro_paragraph}</div>
        <div className="intro-links">
          <a href="#Methodology" className="intro-links__methodology">
            Methodology
            <Icon onClick={null} icon={'arrow'} />
          </a>
          <a href={renderDownloadFile().url} className="intro-links__download">
            Download the data
            <Icon onClick={null} icon={'download'} />
          </a>
          <div className="intro-links__description">
            {renderDownloadFile().description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
