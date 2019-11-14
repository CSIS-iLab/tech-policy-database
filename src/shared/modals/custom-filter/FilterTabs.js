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

  const renderFilterErr = () => {
    return (
    <div className="filter__search-error"> 
      <div>No Results</div>
      <p>Sorry we didn’t find any row titles that match your search.</p>
    </div>
    )
  }

  return (
    <Tabs className="tabs">
      <TabList className="tabs__list">
        <Tab className="tabs__list-item" aria-label="Filter table columns">
          <Icon icon={'columns'} />
          Columns
        </Tab>
        <Tab className="tabs__list-item" aria-label="Filter table rows">
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

        <fieldset className="modal__checkboxes">
          <legend>Select the rows to display</legend>
          <FilterSelect
            handleSelectAll={checkAllColumns}
            handleDeselectAll={uncheckAllColumns}
            maxItems={maxColumns}
            checkedItems={checkedColumns}
          />
          {displayedColumns.length > 0 ? 
          <FilterContent
            displayedItems={displayedColumns}
            checkedItems={checkedColumns}
            setCheckedItems={setCheckedColumns}
          />
          :
          renderFilterErr()
          }
        </fieldset>
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
        <fieldset className="modal__checkboxes">
          <legend>Select the rows to display</legend>
          <FilterSelect
            handleSelectAll={checkAllRows}
            handleDeselectAll={uncheckAllRows}
            maxItems={maxRows}
            checkedItems={checkedRows}
          />
          {displayedRows.length > 0 ? 
          <FilterContent
            displayedItems={displayedRows}
            checkedItems={checkedRows}
            setCheckedItems={setCheckedRows}
          />
          :
          renderFilterErr()
          }
        </fieldset>
      </TabPanel>
    </Tabs>
  )
}

export default FilterTabs
