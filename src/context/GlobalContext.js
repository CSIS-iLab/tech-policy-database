import React, { useState } from 'react'

export const GlobalContext = React.createContext()

export const GlobalContextProvider = (props) => {
  const [allRows, setAllRows] = useState([])
  const [allHeaders, setAllHeaders] = useState([])
  const [filteredRows, setFilteredRows] = useState([])
  const [activeOriginalLang, setActiveOriginalLang] = useState('Original Lang')
  const [langModalStatus, setLangModalStatus] = useState(false)
  const [docLink, setDocLink] = useState('')
  const [searchText, setSearchText] = useState('')
  const [filterSubject, setFilterSubject] = useState('categories')
  const [curatedCat, setCuratedCat] = useState('')
  const [collections, setCollections] = useState([])

  const contextValue = {
    activeOriginalLang, setActiveOriginalLang,
    allHeaders, setAllHeaders,
    allRows, setAllRows,
    collections, setCollections,
    curatedCat, setCuratedCat,
    docLink, setDocLink,
    filteredRows, setFilteredRows,
    filterSubject, setFilterSubject,
    langModalStatus, setLangModalStatus,
    searchText, setSearchText
  }

  return <GlobalContext.Provider value={contextValue}>{props.children}</GlobalContext.Provider>

}

