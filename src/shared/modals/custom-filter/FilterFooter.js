import React from 'react'
import Icon from '../../site-config/Icon'

const FilterFooter = (props) => {
  const {
    checkedRows,
    checkedColumns,
    handleResetFilters,
    applyFilters
  } = props

  // Apply button only clickable when at least one row and column are checked
  const renderApply = () => {
    let isDisabled = true

    if (checkedRows.length > 0 && checkedColumns.length > 0) {
      isDisabled = false
    }
    return (
      <button onClick={applyFilters} disabled={isDisabled}>
        Apply
      </button>
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
      <button onClick={handleResetFilters}>
        <Icon onClick={null} icon={'reset'} />
        Reset all filters
      </button>
      {renderApply()}
      {renderRowWarning()}
      {renderColumnWarning()}
    </div>
  )
}

export default FilterFooter
