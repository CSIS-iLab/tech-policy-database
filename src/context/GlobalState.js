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
  const [catData, setCatData] = useState({})
  const [docLink, setDocLink] = useState('')

  return (
    <ShopContext.Provider
      value={{
        allRows,
        allHeaders,
        catData,
        curatedCategories,
        docLink,
        activeOriginalLang,
        filteredRows,
        filterSubject,
        langModalStatus,
        searchText,
        setAllHeaders,
        setAllRows,
        setCatData,
        setCuratedCategories,
        setDocLink,
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
