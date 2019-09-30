import React from 'react'

const SearchBar = (props) => {
  const {
    handleFilter,
    searchText,
    setSearchText,
    filterSubject,
    setFilterSubject,
    curatedCat
  } = props

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    handleFilter(e.target.value, filterSubject, curatedCat)
  }

  const handleFilterSubject = (e) => {
    setFilterSubject(e.target.value)
    handleFilter(searchText, e.target.value, curatedCat)
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
