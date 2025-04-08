import React, { useContext, useEffect, useCallback } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import LangModal from './LangModal'
import FilterModal from './custom-filter/FilterModal'
import FrameworkModal from './FrameworkModal'

const ModalContainer = () => {
  const { filterModalStatus, langModalStatus, frameModalStatus } = useContext(
    GlobalContext
  )

  // toggles disabled class to prevent body from scrolling when modals are open
  const disableScroll = useCallback(() => {
    let body = document.getElementsByTagName('body')[0]
    if (filterModalStatus || langModalStatus || frameModalStatus) {
      body.classList.add('body--disabled')
    } else {
      body.classList.remove('body--disabled')
    }
  }, [filterModalStatus, langModalStatus, frameModalStatus]);

  // const disableScroll = useCallback(() => {
  //   document.body.style.overflow = 'hidden';
  // }, []);

  // disables tooltip when modal is opened
  const disableToolTip = useCallback(() => {
    let headerCells = document.getElementsByClassName('header-cell__title')
    if (filterModalStatus || langModalStatus || frameModalStatus) {
      Array.from(headerCells).forEach((h) => h._tippy.disable())
    }
  }, [filterModalStatus, langModalStatus, frameModalStatus]);

  useEffect(() => {
    disableScroll()
    disableToolTip()
  }, [disableScroll, disableToolTip])

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
