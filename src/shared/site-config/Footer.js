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
    <div className="footer">
      <div>
        <div>Methodology</div>
        <div>
          <div>{methodology}</div>
          <div>{program_description}</div>
        </div>
      </div>
      <div>
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
          <div>All content © {renderDate()}. All rights reserved.</div>
          <a
            href="https://www.csis.org/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            alt="Privacy Policy"
          >
            Privacy Policy
          </a>
        </div>
        <div>
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
        </div>
        <div>
          <a
            href="https://www.csis.org"
            target="_blank"
            rel="noopener noreferrer"
            alt="CSIS website"
          >
            www.csis.org
          </a>
          <div>1616 Rhode Island Avenue, NW Washington, DC 20036</div>
        </div>
      </div>
      <a name="Methodology" href="#" alt="Methodology redirect"></a>
      <button
            aria-label="back to top"
            className="back-to-top sticky"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon onClick={null} icon={'arrow_up'}/>
      </button>
    </div>
  )
}

export default Footer
