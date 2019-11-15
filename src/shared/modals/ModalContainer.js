import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import LangModal from './LangModal'
import FilterModal from './custom-filter/FilterModal'
import FrameworkModal from './FrameworkModal'

const ModalContainer = () => {
  const {frameModalStatus, langModalStatus, filterModalStatus} = useContext(GlobalContext)

  return (
    frameModalStatus || langModalStatus || filterModalStatus ? 
      <div className="modal__overlay">
        <React.Fragment>
          <LangModal />
          <FilterModal />
          <FrameworkModal />
        </React.Fragment>
      </div> 
    : null 
  )
}

export default ModalContainer

