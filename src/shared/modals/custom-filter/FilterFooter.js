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
    let isDisabled = false

    if (checkedRows.length === 0 || checkedColumns.length === 0) {
      isDisabled = true
    }

    return (
      <button
        className="btn btn--primary modal__apply"
        onClick={applyFilters}
        disabled={isDisabled}
      >
        Apply
      </button>
    )
  }

  const renderRowWarning = () => {
    return checkedRows.length === 0 ? (
      <p className="modal__warning">Please select at least one row</p>
    ) : null
  }

  const renderColumnWarning = () => {
    return checkedColumns.length === 0 ? (
      <p className="modal__warning">Please select at least one column</p>
    ) : null
  }

  return (
    <footer className="modal__footer">
      <button
        className="btn btn--transparent-light btn--xs btn--icon modal__reset"
        onClick={handleResetFilters}
      >
        <Icon icon={'reset'} />
        Reset all filters
      </button>
      {renderApply()}
      {renderRowWarning()}
      {renderColumnWarning()}
    </footer>
  )
}

export default FilterFooter
