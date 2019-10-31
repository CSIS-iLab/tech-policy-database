import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import ModalContainer from '../../shared/modals/ModalContainer'
import TableContainer from '../../shared/table/TableContainer'
import Header from '../../shared/site-config/Header'
import Footer from '../../shared/site-config/Footer'
import BackToTop from '../../shared/site-config/BackToTop'
import tableData from '../../json/tech-policy-int/framework_database.json'
import categories from '../../json/tech-policy-int/explanations.json'
import collections from '../../json/tech-policy-int/curated_categories.json'
import info from '../../json/tech-policy-int/site_info.json'

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
          header.categories[catName]['row_title'] = categories[catName]['title']
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

  const formatSiteInfo = () => {
    info['program_name'] = 'TECH POLICY PROGRAM'
    info['subject'] = 'Data Governance'
    return info
  }

  useEffect(() => {
    context.setAllRows(formatRows())
    context.setAllHeaders(formatHeaders())
    context.setFilteredHeaders(formatHeaders())
    context.setFilteredRows(sortRows(formatRows()))
    context.setCollections(getCollections())
    context.setSiteInfo(formatSiteInfo())
    // eslint-disable-next-line
  }, [])

  return (
    <div className="site-content">
      <Header />
      <TableContainer
        headers={context.filteredHeaders}
        rows={context.filteredRows}
      />
      <ModalContainer />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default MainContainer
