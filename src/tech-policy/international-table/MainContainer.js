import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import ModalContainer from '../../shared/modals/ModalContainer'
import TableContainer from '../../shared/table/TableContainer'
import Header from '../../shared/site-config/Header'
import Introduction from '../../shared/site-config/Introduction'
import Methodology from '../../shared/site-config/Methodology'
import Footer from '../../shared/site-config/Footer'
import BackToTop from '../../shared/site-config/BackToTop'
import tableData from '../../json/tech-policy-int/framework_database.json'
import categories from '../../json/tech-policy-int/explanations.json'
import collections from '../../json/tech-policy-int/curated_categories.json'
import info from '../../json/tech-policy-int/site_info.json'
import Loader from '../../shared/site-config/Loader'

const MainContainer = () => {
  const {
    filteredRows,
    filteredHeaders,
    allHeaders,
    setAllRows,
    setAllHeaders,
    setFilteredHeaders,
    setFilteredRows,
    setCollections,
    setSiteInfo,
    siteInfo,
    allRows,
    isLoaded,
    setIsLoaded
  } = useContext(GlobalContext)

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

  const handleHeaderErr = () => {
    return filteredRows.length > 0 ? filteredHeaders : allHeaders
  }

  useEffect(() => {
    setAllRows(formatRows())
    setAllHeaders(formatHeaders())
    setFilteredHeaders(formatHeaders())
    setFilteredRows(sortRows(formatRows()))
    setCollections(getCollections())
    setSiteInfo(info)
    document.title = `${info.subject} | CSIS ${info.program}`
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (allRows.length > 0 && siteInfo.program) {
      setIsLoaded(true)
    }
  }, [allRows, siteInfo])

  return (
    <div className="site-content">
      <Header />
      {isLoaded ? (
        <React.Fragment>
          <Introduction />
          <TableContainer headers={handleHeaderErr()} rows={filteredRows} />
          <ModalContainer />
          <Methodology />
        </React.Fragment>
      ) : (
        <Loader />
      )}
      <Footer />
      <BackToTop />
    </div>
  )
}

export default MainContainer
