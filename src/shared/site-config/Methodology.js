import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Icon from '../site-config/Icon'

const Methodology = () => {
  const { siteInfo } = useContext(GlobalContext)

  const { methodology, program_description } = siteInfo

  return (
    <section id="methodology" className="site-footer__explanation">
      <h2 className="site-footer__title">Methodology</h2>
      <p className="site-footer__methodology">{methodology}</p>
      <p className="site-footer__prog-desc">{program_description}</p>
    </section>
  )
}

export default Methodology
