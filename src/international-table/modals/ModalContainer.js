import React, { useContext } from 'react'
import LangModal from './LangModal'
import shopContext from '../../context/shop-context'

const ModalContainer = () => {
  const context = useContext(shopContext)

  return (
    <React.Fragment>
      <LangModal headers={context.allHeaders} />
      {/* <CustomFilterModal /> */}
    </React.Fragment>
  )
}

export default ModalContainer
