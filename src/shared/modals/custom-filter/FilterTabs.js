import React from 'react'
import Icon from '../../site-config/Icon'

const FilterTabs = (props) => {
  const { setActiveTab, handleSearchFilter } = props

  const handleTabSwitch = (tab) => {
    setActiveTab(tab)
    handleSearchFilter(document.getElementById('search-input').value, tab)
  }

  return (
    <div>
      <div onClick={() => handleTabSwitch('Columns')}>
        <Icon onClick={null} icon={'columns'} />
        <span>Columns</span>
      </div>
      <div onClick={() => handleTabSwitch('Rows')}>
        <Icon onClick={null} icon={'rows'} />
        <span>Rows</span>
      </div>
    </div>
  )
}

export default FilterTabs
