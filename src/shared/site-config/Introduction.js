import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Icon from './Icon'

const Introduction = () => {
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
    <section className="intro container--inner">
      <div className="intro__program">{program_name}</div>
      <h1 className="intro__subject">{subject}</h1>
      <div className="intro__description">{intro_paragraph}</div>
      <nav role="navigation">
        <ul className="intro__nav">
          <li className="intro__nav-item intro__nav-item-methodology">
            <a className="intro__methodology" href="#methodology">
              Methodology
              <Icon icon={'arrow'} />
            </a>
          </li>
          <li className="intro__nav-item intro__nav-item-download">
            <a className="intro__download" href={renderDownloadFile().url}>
              Download the data
              <Icon icon={'download'} />
            </a>
            <p className="intro__download-desc">
              {renderDownloadFile().description}
            </p>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Introduction
