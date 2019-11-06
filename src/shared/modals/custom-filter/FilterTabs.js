import React from 'react'
import Icon from '../../site-config/Icon'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import FilterContent from './FilterContent'
import FilterSelect from './FilterSelect'

const FilterTabs = (props) => {
  const {
    setActiveTab,
    handleSearchFilter,
    displayedRows,
    setCheckedRows,
    checkedRows,
    displayedColumns,
    setCheckedColumns,
    checkedColumns,
    maxRows,
    maxColumns,
    checkAllColumns,
    checkAllRows,
    uncheckAllColumns,
    uncheckAllRows
  } = props

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

      <TabPanel>
        <FilterSelect
          handleSelectAll={checkAllColumns}
          handleDeselectAll={uncheckAllColumns}
          maxItems={maxColumns}
          checkedItems={checkedColumns}
        />
        <FilterContent
          title={'columns'}
          displayedItems={displayedColumns}
          checkedItems={checkedColumns}
          setCheckedItems={setCheckedColumns}
        />
      </TabPanel>
      <TabPanel>
        <FilterSelect
          handleSelectAll={checkAllRows}
          handleDeselectAll={uncheckAllRows}
          maxItems={maxRows}
          checkedItems={checkedRows}
        />
        <FilterContent
          title={'rows'}
          displayedItems={displayedRows}
          checkedItems={checkedRows}
          setCheckedItems={setCheckedRows}
        />
      </TabPanel>
    </Tabs>
  )
}

export default FilterTabs
