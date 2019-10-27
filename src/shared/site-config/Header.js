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
      <div>
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
        <SocialShare />
      </div>
      <div>
        <div>{program_name}</div>
        <div>{subject}</div>
      </div>
      <div>
        <div>{intro_paragraph}</div>
        <div>
          <a href="#methodology">Methodology</a>
          <Icon onClick={null} icon={'arrow'} />

          <span>Download the data</span>
          <Icon onClick={null} icon={'download'} />
          <div>{renderDownloadFile().url}</div>
          <div>{renderDownloadFile().description}</div>
        </div>
      </div>
    </div>
  )
}

export default Header
