import React from 'react'
import LangModal from './LangModal'
import FilterModal from './custom-filter/FilterModal'

const ModalContainer = () => {
  return (
    <React.Fragment>
      <LangModal />
      <FilterModal />
    </React.Fragment>
  )
}

export default ModalContainer
