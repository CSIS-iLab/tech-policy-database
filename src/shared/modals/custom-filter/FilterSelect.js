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

  const selectTab = () => {
    return activeTab === 'Rows' ? checkedRows : checkedColumns
  }

  const renderIcon = () => {
    if (selectTab().length === 0) {
      return <Icon onClick={handleSelectAll} icon={'check_empty'} />
    } else if (
      (selectTab().length === maxRows && activeTab === 'Rows') ||
      (selectTab().length === maxColumns && activeTab === 'Columns')
    ) {
      return <Icon onClick={handleDeselectAll} icon={'check_filled'} />
    } else {
      return <Icon onClick={handleDeselectAll} icon={'check_dash'} />
    }
  }

  const renderText = () => {
    if (selectTab().length === 0) {
      return <span>Select All</span>
    } else if (selectTab().length > 0) {
      return <span>Deselect All</span>
    }
  }

  return (
    <div>
      {renderIcon()}
      {renderText()}
    </div>
  )
}

export default FilterSelect
