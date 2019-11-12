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
    <div className="search table-search">
      <div className="search__input table-search__input">
        <Icon icon={'search'} />
        <input
          className="search__input-field table-search__input-field"
          type="text"
          onChange={handleSearchText}
          placeholder="Search"
        />
        <button className="btn search__button-close table-search__button-close">
          <Icon icon={'close-circle'} />
        </button>
        <div className="search__input-fade table-search__input-fade"></div>
      </div>
      <div className="search__dropdown table-search__dropdown">
        <select className="search__dropdown-field table-search__dropdown-field" onChange={handleFilterSubject}>
          <option className="search__dropdown-item table-search__dropdown-item" value="categories">
            Categories
        </option>
          <option className="search__dropdown-item table-search__dropdown-item" value="abbreviated_lang">
            Abbreviated Language
        </option>
          <option className="search__dropdown-item table-search__dropdown-item" value="original_lang">
            Original Language
        </option>
        </select>
        <Icon icon={'arrow-dropdown'} />
        <div className="search__dropdown-fade table-search__dropdown-fade"></div>
      </div>
    </div>
  )
}

export default SearchFilter
