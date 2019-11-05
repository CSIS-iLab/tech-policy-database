import React from 'react'
import Icon from '../../site-config/Icon'

const FilterTabs = (props) => {
  const { activeTab, setActiveTab, handleSearchFilter } = props

  // Switches the activeTab and calls the searchFilter based on current search term
  const handleTabSwitch = (tab) => {
    console.log(activeTab)
    setActiveTab(tab)
    handleSearchFilter(document.getElementById('search-input').value, tab)
  }
  
  return (
    <div className="modal__tab-menu" >
      <ul role="tablist" >
        <li role="presentation" >
          <a className="modal__tab" id="tab_1" href="#Columns" role="tab" aria-selected="true" aria-controls="Columns" tabIndex="0" onClick={() => handleTabSwitch('Columns')} onKeyUp={() => handleTabSwitch('Columns')}>
            <Icon icon={'columns'} />Columns
          </a>
        </li>
        <li >
          <a className="modal__tab" id="tab_2" href="#Rows" role="tab" aria-selected="false" aria-controls="Rows" tabIndex="0" onClick={() => handleTabSwitch('Rows')} onKeyUp={() => handleTabSwitch('Rows')}>
            <Icon icon={'rows'} /> Rows
          </a>
        </li>
      </ul>
        <div id="Columns" aria-labelledby="tab_1" role="tabpanel"></div>
        <div id="Rows" aria-labelledby="tab_2" role="tabpanel" aria-hidden="true"></div>
    </div>
  )
}

export default FilterTabs

