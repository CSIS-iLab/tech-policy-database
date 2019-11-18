import React from 'react'
import LangModal from './LangModal'
import FilterModal from './custom-filter/FilterModal'
import FrameworkModal from './FrameworkModal'

const ModalContainer = () => {

  return (
    <React.Fragment>
      <LangModal />
      <FilterModal />
      <FrameworkModal />
    </React.Fragment>
  )
}

export default ModalContainer

