import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Description from '../../shared/site-config/Description'
import ModalContainer from '../../shared/modals/ModalContainer'
import TableContainer from '../../shared/table/TableContainer'
import Header from '../../shared/site-config/Header'
import Footer from '../../shared/site-config/Footer'
import tableData from '../../json/tech-policy-int/framework_database.json'
import categories from '../../json/tech-policy-int/explanations.json'
import collections from '../../json/tech-policy-int/curated_categories.json'

const MainContainer = () => {
  const context = useContext(GlobalContext)

  // Adding key-value pair of Categories to tableData JSON to create top-left cell
  const formatHeaders = () => {
    return [{ name: 'Categories' }, ...tableData]
  }

  // Combines JSON objects to format data to create datatable
  const formatRows = () => {
    let rows = Object.keys(categories).map((catName) => {
      return formatHeaders().map((header) => {
        if (header.categories !== undefined) {
          header.categories[catName]['default_lang'] =
            categories[catName]['default_lang']
          header.categories[catName]['category'] =
            categories[catName]['category']
          return [header.name, header.categories[catName]]
        } else {
          return [categories[catName].title, categories[catName].description]
        }
      })
    })
    return rows
  }

  // Sorts by collections and adds divider when at least one category is present
  const sortRows = (rows) => {
    return getCollections().reduce((acc, collection) => {
      acc.push([collection])
      acc = [...acc, ...rows.filter((row) => row[1][1].category === collection)]
      return acc
    }, [])
  }

  // Formats Collection names to be displayed
  const getCollections = () => {
    return Object.keys(collections)
      .map((name) => collections[name][name])
      .sort((a, b) => a.localeCompare(b))
  }

  useEffect(() => {
    context.setAllRows(formatRows())
    context.setAllHeaders(formatHeaders())
    context.setFilteredHeaders(formatHeaders())
    context.setFilteredRows(sortRows(formatRows()))
    context.setCollections(getCollections())
    // eslint-disable-next-line
  }, [])

  return (
    <div className="international-container">
      <Header />
      <Description />
      <TableContainer
        headers={context.filteredHeaders}
        rows={context.filteredRows}
      />
      <ModalContainer />
      <Footer />
    </div>
  )
}

export default MainContainer
