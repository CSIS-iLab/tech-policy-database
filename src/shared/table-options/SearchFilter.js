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
    <div className="table__search search search__table">
      <div className="search__input search__table-input">
        <Icon icon={'search'} className="search__icon search__table-icon-search search__icon-search" />
        <input
          className="search-input search__input-field search__table-input-field"
          type="text"
          onChange={handleSearchText}
          placeholder="Search"
        />
        <button className="btn search__button-close search__table-button search__table-button-close">
          <Icon icon={'close-circle'} className="search__icon search__icon-close search__icon-close-table" />
        </button>
        <div className="search__table-input-fade"></div>
      </div>
      <div className="search__dropdown search__table-dropdown">
        <select className="search-dropdown search__dropdown-field search__table-dropdown-field" onChange={handleFilterSubject}>
          <option className="dropdown-item search__dropdown-item search__table-dropdown-item" value="categories">
            Categories
        </option>
          <option className="dropdown-item search__dropdown-item search__table-dropdown-item" value="abbreviated_lang">
            Abbreviated Language
        </option>
          <option className="dropdown-item search__dropdown-item search__table-dropdown-item" value="original_lang">
            Original Language
        </option>
        </select>
        <Icon icon={'arrow-dropdown'} className="search__icon search__icon-triangle search__table-icon-triangle" />
        <div className="search__table-dropdown-fade"></div>
      </div>
    </div>
  )
}

export default SearchFilter
