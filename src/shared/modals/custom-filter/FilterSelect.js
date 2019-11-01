import React from 'react'
import Icon from '../../site-config/Icon'

const FilterSelect = (props) => {
  const {
    maxRows,
    maxColumns,
    checkedRows,
    checkedColumns,
    activeTab,
    handleDeselectAll,
    handleSelectAll
  } = props

  // Helper f(n) that returns checked rows or columns based on activeTab
  const selectTab = () => {
    return activeTab === 'Rows' ? checkedRows : checkedColumns
  }

  const renderText = () => {
    if (selectTab().length === 0) {
      return <span className="modal__select-text">Select All</span>
    } else if (selectTab().length > 0) {
      return <span className="modal__select-text">Deselect All</span>
    }
  }

  const renderSelect = () => {
    if (selectTab().length === 0) {
      return handleSelectAll 
    } else if (
      (selectTab().length === maxRows && activeTab === 'Rows') ||
      (selectTab().length === maxColumns && activeTab === 'Columns')
    ) {
      return handleDeselectAll 
    } else {
      return handleDeselectAll 
    }
  }

  return (
    <div className="checkbox__container">
      <input type="checkbox" value={renderText()} name="collections" id={renderText()} onChange={renderSelect()} />
      <label className="checkbox__items" htmlFor={renderText()}>{renderText()}</label>
    </div>
  )
}

export default FilterSelect
