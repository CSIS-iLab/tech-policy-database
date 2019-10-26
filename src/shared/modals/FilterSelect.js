import React from 'react'
import Icon from '../site-config/Icon'

const FilterSelect = (props) => {
  const {
    setCheckedFilters,
    checkedRows,
    checkedColumns,
    activeTab,
    deselectAll
  } = props

  const selectTab = () => {
    return activeTab === 'Rows' ? checkedRows : checkedColumns
  }

  const renderIcon = () => {
    if (selectTab().length === 0) {
      return <Icon onClick={setCheckedFilters} icon={'check_empty'} />
    } else if (
      (selectTab().length === 29 && activeTab === 'Rows') ||
      (selectTab().length === 10 && activeTab === 'Columns')
    ) {
      return <Icon onClick={deselectAll} icon={'check_filled'} />
    } else {
      return <Icon onClick={deselectAll} icon={'check_dash'} />
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
