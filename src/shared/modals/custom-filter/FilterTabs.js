import React from 'react'
import Icon from '../../site-config/Icon'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import FilterContent from './FilterContent'
import FilterSelect from './FilterSelect'
import FilterPanel from './FilterPanel'

const FilterTabs = (props) => {
  const {
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
    uncheckAllRows,
    collections,
    allRows,
    checkedCollections,
    setCheckedCollections,
    setDisplayedRows
  } = props

  return (
    <Tabs className="modal__tab-menu">
      <TabList>
        <Tab className="modal__tab">
          <Icon icon={'columns'} />
          Columns
        </Tab>
        <Tab className="modal__tab">
          <Icon icon={'rows'} />
          Rows
        </Tab>
      </TabList>

      <TabPanel>
        <FilterPanel
          handleSearchFilter={handleSearchFilter}
          collections={collections}
          allRows={allRows}
          checkedCollections={checkedCollections}
          setCheckedCollections={setCheckedCollections}
          title={'Columns'}
          displayedItems={displayedColumns}
          maxItems={maxColumns}
          setDisplayedRows={setDisplayedRows}
        />

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
        <FilterPanel
          handleSearchFilter={handleSearchFilter}
          collections={collections}
          allRows={allRows}
          checkedCollections={checkedCollections}
          setCheckedCollections={setCheckedCollections}
          title={'Rows'}
          displayedItems={displayedRows}
          maxItems={maxRows}
          setDisplayedRows={setDisplayedRows}
        />

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
