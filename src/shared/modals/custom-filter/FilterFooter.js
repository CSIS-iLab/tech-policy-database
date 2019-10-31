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
    return (checkedRows.length > 0 && checkedColumns.length) > 0 ? (
      <button className="modal__apply" onClick={applyFilters}>
        Apply
      </button>
    ) : (
      <button className="modal__apply--disabled">Apply</button>
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
    <section className="modal__footer">
      <div className="modal__reset" onClick={handleResetFilters}>
        <Icon onClick={null} icon={'reset'} />
        <span className="modal__reset-text">Reset all filters</span>
      </div>
      {renderApply()}
      {renderRowWarning()}
      {renderColumnWarning()}
    </section>
  )
}

export default FilterFooter
