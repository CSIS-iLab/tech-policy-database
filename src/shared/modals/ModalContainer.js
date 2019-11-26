import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import LangModal from './LangModal'
import FilterModal from './custom-filter/FilterModal'
import FrameworkModal from './FrameworkModal'

const ModalContainer = () => {
  const { filterModalStatus, langModalStatus, frameModalStatus } = useContext(
    GlobalContext
  )

  // toggles disabled class to prevent body from scrolling when modals are open
  useEffect(() => {
    let body = document.getElementsByTagName('body')[0]
    if (filterModalStatus || langModalStatus || frameModalStatus) {
      body.classList.add('body--disabled')
    } else {
      body.classList.remove('body--disabled')
    }
  }, [filterModalStatus, langModalStatus, frameModalStatus])

  return (
    <React.Fragment>
      <LangModal />
          
      <FilterModal />
          
      <FrameworkModal />
        {' '}
    </React.Fragment>
  )
}

export default ModalContainer
