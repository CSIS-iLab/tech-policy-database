import React from 'react'
import Icon from '../site-config/Icon'

const SearchFilter = (props) => {
  const {
    handleFilter,
    searchText,
    setSearchText,
    filterSubject,
    setFilterSubject
  } = props

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    handleFilter(e.target.value, filterSubject)
  }

  const handleFilterSubject = (e) => {
    setFilterSubject(e.target.value)
    handleFilter(searchText, e.target.value)
  }

  return (
    <div className="table__search">
      <Icon onClick={null} icon={'search'}/>
      <input
        type="text"
        onChange={handleSearchText}
        placeholder="Search"
      />
      <select onChange={handleFilterSubject}>
        <option value="categories">Categories</option>
        <option value="abbreviated_lang">Abbreviated Language</option>
        <option value="original_lang">Original Language</option>
      </select>
    </div>
  )
}

export default SearchFilter
