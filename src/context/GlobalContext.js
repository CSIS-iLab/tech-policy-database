import React, { useState } from 'react'

export const GlobalContext = React.createContext()

export const GlobalContextProvider = (props) => {
  const [allRows, setAllRows] = useState([])
  const [allHeaders, setAllHeaders] = useState([])
  const [filteredRows, setFilteredRows] = useState([])
  const [filteredHeaders, setFilteredHeaders] = useState([])
  const [langModalStatus, setLangModalStatus] = useState(false)
  const [frameModalStatus, setFrameModalStatus] = useState(false)
  const [activeFramework, setActiveFramework] = useState('')
  const [searchText, setSearchText] = useState('')
  const [filterSubject, setFilterSubject] = useState('categories')
  const [curatedCat, setCuratedCat] = useState('')
  const [collections, setCollections] = useState([])
  const [filterModalStatus, setFilterModalStatus] = useState(false)
  const [langModalData, setLangModalData] = useState({})
  const [siteInfo, setSiteInfo] = useState({})
  const [isFiltered, setIsFiltered] = useState(false)
  const [customFilteredRows, setCustomFilteredRows] = useState([])

  // Sorts by collections and adds divider when at least one category is present
  const sortRows = (rows) => {
    return collections.reduce((acc, collection) => {
      if (rows.find((r) => r[1][1].category === collection) !== undefined) {
        acc.push([collection])
      }
      acc = [...acc, ...rows.filter((row) => row[1][1].category === collection)]
      return acc
    }, [])
  }

  const contextValue = {
    sortRows,
    allHeaders,
    setAllHeaders,
    allRows,
    setAllRows,
    collections,
    setCollections,
    curatedCat,
    setCuratedCat,
    filteredHeaders,
    setFilteredHeaders,
    filteredRows,
    setFilteredRows,
    filterModalStatus,
    setFilterModalStatus,
    filterSubject,
    setFilterSubject,
    langModalStatus,
    setLangModalStatus,
    searchText,
    setSearchText,
    frameModalStatus,
    setFrameModalStatus,
    activeFramework,
    setActiveFramework,
    langModalData,
    setLangModalData,
    siteInfo,
    setSiteInfo,
    isFiltered,
    setIsFiltered,
    customFilteredRows,
    setCustomFilteredRows
  }

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  )
}
