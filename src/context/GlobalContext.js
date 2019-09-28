import React, { useState } from 'react'

export const GlobalContext = React.createContext()

export const GlobalContextProvider = (props) => {
  const [searchText, setSearchText] = useState('')
  const [allRows, setAllRows] = useState([])
  const [allHeaders, setAllHeaders] = useState([])
  const [filteredRows, setFilteredRows] = useState([])
  const [filterSubject, setFilterSubject] = useState('categories')
  const [curatedCategories, setCuratedCategories] = useState({})
  const [activeOriginalLang, setActiveOriginalLang] = useState('Original Lang')
  const [langModalStatus, setLangModalStatus] = useState(false)
  const [catData, setCatData] = useState({})
  const [docLink, setDocLink] = useState('')

  const contextValue = {
    activeOriginalLang, setActiveOriginalLang,
    allHeaders, setAllHeaders,
    allRows, setAllRows,
    catData, setCatData,
    curatedCategories, setCuratedCategories,
    docLink, setDocLink,
    filteredRows, setFilteredRows,
    filterSubject, setFilterSubject,
    langModalStatus, setLangModalStatus,
    searchText, setSearchText
  }

  return <GlobalContext.Provider value={contextValue}>{props.children}</GlobalContext.Provider>

}

