import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const Methodology = () => {
  const { siteInfo } = useContext(GlobalContext)

  const { methodology, program_description } = siteInfo

  return (
    <section id="methodology" className="methodology container--inner">
      <h2 className="methodology__title">Methodology</h2>
      <p className="methodology__desc">{methodology}</p>
      <p className="methodology__program-desc">{program_description}</p>
    </section>
  )
}

export default Methodology
