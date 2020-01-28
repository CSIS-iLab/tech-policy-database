import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Icon from './Icon'

const Introduction = () => {
  const { siteInfo } = useContext(GlobalContext)

  const { subject, program, download_file, intro_paragraph } = siteInfo

  const renderDownloadFile = () => {
    if (download_file === undefined) {
      return ''
    } else {
      return download_file
    }
  }

  const createMarkup = (lang) => {
    return { __html: lang }
  }

  return (
    <section className="intro container--inner">
      <div className="intro__program">{program}</div>
      <h1 className="intro__subject">{subject}</h1>
      <div className="intro__description"dangerouslySetInnerHTML={createMarkup(intro_paragraph)}></div>
      <nav>
        <ul className="intro__nav">
          <li className="intro__nav-item">
            <a href="#methodology" title="Jump to the Methodology section">
              Methodology
              <Icon icon={'arrow'} />
            </a>
          </li>
          <li className="intro__nav-item">
            <a
              href={renderDownloadFile().url}
              target="_blank"
              rel="noopener noreferrer"
              title="View the data spreadsheet"
            >
              Download the data
              <Icon icon={'download'} />
            </a>
            <p>{renderDownloadFile().description}</p>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Introduction
