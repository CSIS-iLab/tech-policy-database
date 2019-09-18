import React, { useContext } from "react";
import shopContext from "../../context/shop-context"

const Search = () => {
  const context = useContext(shopContext)

  const handleSearchText = e => {
    context.setSearchText(e.target.value)
  }


  return (
    <div>
      <input type="text" onKeyUp={e => handleSearchText(e)} placeholder="Search"></input>
      <select>
        <option value="categories">Categories</option>
        <option value="abbreviated_lang">Abbreviated Language</option>
        <option value="original_lang">Original Language</option>
      </select>
    </div>
  )
};

export default Search;
