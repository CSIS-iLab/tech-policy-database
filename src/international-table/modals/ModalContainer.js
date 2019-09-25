import React, { useContext } from 'react'
import LangModal from './LangModal'
import shopContext from '../../context/shop-context'

const ModalContainer = () => {
  const context = useContext(shopContext)

  return (
    <div>
      <LangModal headers={context.allHeaders} />
      {/* <CustomFilterModal /> */}
    </div>
  )
}

export default ModalContainer
