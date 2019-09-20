import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'

const Search = () => {
  const context = useContext(shopContext)

  const handleSearchText = (e) => {
    context.setSearchText(e.target.value)
  }

  const handleFilterSubject = (e) => {
    context.setFilterSubject(e.target.value)
  }

  return (
    <div>
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
