import React from 'react'

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

   // Helper f(n) that returns max items per column or row based on activeTab
   const maxItems = () => {
    return (selectTab().length === maxRows && activeTab === 'Rows') || (selectTab().length === maxColumns && activeTab === 'Columns')
  }

  const renderText = () => {
    if (selectTab().length === 0) {
      return 'Select All'
    } 
      return 'Deselect All'
  }

  const selectOnChange = () => {
    if (selectTab().length === 0) {
      return handleSelectAll
    } 
    return handleDeselectAll 
  }

  const renderClass = () => {
    if (selectTab().length === 0 || maxItems()) {
      return null
    }  
    return 'checkbox--mid'
  }


  return (
    <div className="checkbox__container">
      <input className={renderClass()} type="checkbox" value={'SelectAll'} name="collections" id='SelectAll' onChange={selectOnChange()} />
      <label className="checkbox__items" htmlFor={'SelectAll'}>{renderText()}</label>
    </div>
  )
}

export default FilterSelect
