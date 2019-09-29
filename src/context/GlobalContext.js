import React, { useState } from 'react'

export const GlobalContext = React.createContext()

export const GlobalContextProvider = (props) => {
  const [allRows, setAllRows] = useState([])
  const [allHeaders, setAllHeaders] = useState([])
  const [filteredRows, setFilteredRows] = useState([])
  const [activeOriginalLang, setActiveOriginalLang] = useState('Original Lang')
  const [langModalStatus, setLangModalStatus] = useState(false)
  const [docLink, setDocLink] = useState('')

  const contextValue = {
    activeOriginalLang, setActiveOriginalLang,
    allHeaders, setAllHeaders,
    allRows, setAllRows,
    docLink, setDocLink,
    filteredRows, setFilteredRows,
    langModalStatus, setLangModalStatus
  }

  return <GlobalContext.Provider value={contextValue}>{props.children}</GlobalContext.Provider>

}

