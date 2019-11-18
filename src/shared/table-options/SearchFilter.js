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

  const handleClear = () => {
    setSearchText("")
    handleFilter("", filterSubject)
  }

  return (
    <div className="search table-search">
      <div className="search__input table-search__input">
        <Icon icon={'search'} />
        <input
          className="search__input-field table-search__input-field"
          type="text"
          onChange={handleSearchText}
          placeholder="Search"
          value={searchText}
        />
        <button className="btn search__button-close table-search__button-close" onClick={handleClear}>
          <Icon icon={'close-circle'} />
        </button>
      </div>
      <div className="search__dropdown table-search__dropdown">
        <select className="search__dropdown-field table-search__dropdown-field" onChange={handleFilterSubject}>
          <option value="categories">
            Categories
        </option>
          <option value="abbreviated_lang">
            Abbreviated Language
        </option>
          <option value="original_lang">
            Original Language
        </option>
        </select>
        <Icon icon={'arrow-dropdown'} />
      </div>
    </div>
  )
}

export default SearchFilter
