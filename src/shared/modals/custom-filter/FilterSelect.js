import React from 'react'

const FilterSelect = (props) => {
  const { maxItems, checkedItems, handleDeselectAll, handleSelectAll } = props

  // // Helper f(n) that returns checked rows or columns based on activeTab
  // const selectTab = () => {
  //   return activeTab === 'Rows' ? checkedRows : checkedColumns
  // }

  // Helper f(n) that returns max items per column or row based on activeTab
  const maxCheckedItems = () => {
    return checkedItems.length === maxItems
  }

  const renderText = () => {
    if (checkedItems.length === 0) {
      return 'Select All'
    }
    return 'Deselect All'
  }

  const selectOnChange = () => {
    if (checkedItems.length === 0) {
      return handleSelectAll
    }
    return handleDeselectAll
  }

  const renderClass = () => {
    if (checkedItems.length === 0 || maxCheckedItems()) {
      return null
    }
    return 'checkbox--mid'
  }

  const renderCheck = () => {
    return checkedItems.length > 0
  }

  return (
    <div className="checkbox__container">
      <input
        className={renderClass()}
        type="checkbox"
        value={'SelectAll'}
        name="collections"
        id="SelectAll"
        onChange={selectOnChange()}
        checked={renderCheck()}
      />
      <label className="checkbox__items" htmlFor={'SelectAll'}>
        {renderText()}
      </label>
    </div>
  )
}

export default FilterSelect
