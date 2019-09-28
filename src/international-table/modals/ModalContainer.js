import React, { useContext } from 'react'
import LangModal from './LangModal'
import { GlobalContext } from '../../context/GlobalContext'

const ModalContainer = () => {
  const context = useContext(GlobalContext)

  return (
    <React.Fragment>
      <LangModal headers={context.allHeaders} />
      {/* <CustomFilterModal /> */}
    </React.Fragment>
  )
}

export default ModalContainer
