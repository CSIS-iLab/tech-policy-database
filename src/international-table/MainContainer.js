import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Description from './Description'
import ModalContainer from './modals/ModalContainer'
import TableContainer from '../shared/table/TableContainer'
import tableData from '../json/framework_database.json'
import categories from '../json/explanations.json'

const MainContainer = () => {
  const context = useContext(GlobalContext)

  // Adding key-value pair of Categories to tableData JSON to create top-left cell
  const formatHeaders = () => {
    return [{ 'name': 'Categories' }, ...tableData]
  }

  // Combines JSON objects to format data to create datatable
  const formatRows = () => {
    let rows = Object.keys(categories).map(catName => {
      return formatHeaders().map(header => {
        if (header.categories !== undefined) {
          header.categories[catName]['default_lang'] = categories[catName]['default_lang']
          header.categories[catName]['category'] = categories[catName]['category']
          return [header.name, header.categories[catName]]
        } else {
          return [categories[catName].title, categories[catName].description]
        }
      })
    })
    return rows
  }

  useEffect(() => {
    context.setAllRows(formatRows())
    context.setAllHeaders(formatHeaders())
    context.setFilteredRows(formatRows())
    // eslint-disable-next-line 
  }, [])

  return (
    <div className="international-container">
      <Description />
      <TableContainer headers={context.allHeaders} rows={context.filteredRows} />
      <ModalContainer />
    </div>
  )
}

export default MainContainer
