import React from 'react'
import Icon from '../../site-config/Icon'

const FilterFooter = (props) => {
  const { checkedRows, checkedColumns, handleResetFilters, handleApply } = props

  const renderApply = () => {
    return (checkedRows.length > 0 && checkedColumns.length) > 0 ? (
      <button onClick={handleApply}>Apply</button>
    ) : (
      <div>Apply</div>
    )
  }

  const renderRowWarning = () => {
    return checkedRows.length === 0 ? (
      <div>Please select at least one row</div>
    ) : null
  }

  const renderColumnWarning = () => {
    return checkedColumns.length === 0 ? (
      <div>Please select at least one column</div>
    ) : null
  }

  return (
    <div className="modal__footer">
      <div onClick={handleResetFilters}>
        <Icon onClick={null} icon={'reset'} />
        <span>Reset all filters</span>
      </div>
      {renderApply()}
      {renderRowWarning()}
      {renderColumnWarning()}
    </div>
  )
}

export default FilterFooter
