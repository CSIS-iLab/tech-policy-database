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
    </div>
  )
};

export default Search;
