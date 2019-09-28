import React, { useState } from 'react'

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('')
  const [filterSubject, setFilterSubject] = useState('categories')


  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    props.filterRows(searchText, filterSubject)
  }

  const handleFilterSubject = (e) => {
    setFilterSubject(e.target.value)
    props.filterRows(searchText, filterSubject)
  }

  return (
    <div className="table__search">
      <input
        type="text"
        onChange={handleSearchText}
        placeholder="Search"
      ></input>
      <select onChange={handleFilterSubject}>
        <option value="categories">Categories</option>
        <option value="abbreviated_lang">Abbreviated Language</option>
        <option value="original_lang">Original Language</option>
      </select>
    </div>
  )
}

export default SearchBar
