import React, { useState } from 'react'

export const GlobalContext = React.createContext()

export const GlobalContextProvider = (props) => {
  const [allRows, setAllRows] = useState([])
  const [allHeaders, setAllHeaders] = useState([])
  const [filteredRows, setFilteredRows] = useState([])
  const [filteredHeaders, setFilteredHeaders] = useState([])
  const [activeOriginalLang, setActiveOriginalLang] = useState('Original Lang')
  const [langModalStatus, setLangModalStatus] = useState(false)
  const [frameModalStatus, setFrameModalStatus] = useState(false)
  const [activeFramework, setActiveFramework] = useState('')
  const [docLink, setDocLink] = useState('')
  const [searchText, setSearchText] = useState('')
  const [filterSubject, setFilterSubject] = useState('categories')
  const [curatedCat, setCuratedCat] = useState('')
  const [collections, setCollections] = useState([])
  const [filterModalStatus, setFilterModalStatus] = useState(false)

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
    activeOriginalLang,
    setActiveOriginalLang,
    allHeaders,
    setAllHeaders,
    allRows,
    setAllRows,
    collections,
    setCollections,
    curatedCat,
    setCuratedCat,
    docLink,
    setDocLink,
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
    setActiveFramework
  }

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  )
}
