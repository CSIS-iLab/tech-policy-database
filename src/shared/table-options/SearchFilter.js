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
      <Icon icon={'search'} className="search__icon search__icon-search search__icon-search-table" />
      <input
        className="search-input search__input-table"
        type="text"
        onChange={handleSearchText}
        placeholder="Search"
      />
      <button className="search__button search__button-close search__button-close-table">
        <Icon icon={'close-circle'} className="search__icon search__icon-close search__icon-close-table" />
      </button>
      <select className="search-dropdown search__dropdown-table" onChange={handleFilterSubject}>
        <option className="dropdown-item" value="categories">
          Categories
        </option>
        <option className="dropdown-item search__dropdown-item-table" value="abbreviated_lang">
          Abbreviated Language
        </option>
        <option className="dropdown-item search__dropdown-item-table" value="original_lang">
          Original Language
        </option>
      </select>
      <button className="search__button search__button-triangle search__button-triangle-table">
        <Icon icon={'arrow-triangle-down'} className="search__icon search__icon-triangle search__icon-triangle-table" />
      </button>
    </div>
  )
}

export default SearchFilter
