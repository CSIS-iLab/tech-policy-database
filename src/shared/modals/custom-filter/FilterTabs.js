import React from 'react'
import Icon from '../../site-config/Icon'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const FilterTabs = (props) => {
  const { setActiveTab, handleSearchFilter } = props

  // Switches the activeTab and calls the searchFilter based on current search term
  const handleTabSwitch = (tab) => {
    setActiveTab(tab)
    handleSearchFilter(document.getElementById('search-input').value, tab)
  }

  // className="modal__tab"
  //       onClick={() => handleTabSwitch('Columns')}

  //       <div className="modal__tab" onClick={() => handleTabSwitch('Rows')}>

  //       </div>

  return (
    <Tabs className="modal__tab-menu">
      <TabList>
        <Tab>
          <Icon icon={'columns'} />
          Columns
        </Tab>
        <Tab>
          <Icon icon={'rows'} />
          Rows
        </Tab>
      </TabList>

      <TabPanel>Columns go here</TabPanel>
      <TabPanel>Rows go here</TabPanel>
    </Tabs>
  )
}

export default FilterTabs
