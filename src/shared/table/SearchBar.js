import React from 'react'

const Search = (props) => {

  const handleSearchText = (e) => {
    props.setSearchText(e.target.value)
  }

  const handleFilterSubject = (e) => {
    props.setFilterSubject(e.target.value)
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

export default Search
