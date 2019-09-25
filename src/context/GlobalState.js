import React, { useState } from 'react'
import ShopContext from './shop-context'

const GlobalState = (props) => {
  const [searchText, setSearchText] = useState('')
  const [allRows, setAllRows] = useState([])
  const [allHeaders, setAllHeaders] = useState([])
  const [filteredRows, setFilteredRows] = useState([])
  const [filterSubject, setFilterSubject] = useState('categories')
  const [curatedCategories, setCuratedCategories] = useState({})
  const [activeOriginalLang, setActiveOriginalLang] = useState('Original Lang')
  const [langModalStatus, setLangModalStatus] = useState(false)

  return (
    <ShopContext.Provider
      value={{
        allRows,
        allHeaders,
        curatedCategories,
        activeOriginalLang,
        filteredRows,
        filterSubject,
        langModalStatus,
        searchText,
        setAllHeaders,
        setAllRows,
        setCuratedCategories,
        setActiveOriginalLang,
        setFilteredRows,
        setFilterSubject,
        setLangModalStatus,
        setSearchText
      }}
    >
      {props.children}
    </ShopContext.Provider>
  )
}

export default GlobalState
