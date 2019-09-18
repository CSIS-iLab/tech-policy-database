import React, { useState } from "react";
import ShopContext from "./shop-context";

const GlobalState = props => {
  const [searchText, setSearchText] = useState('')
  const [allRows, setAllRows] = useState([])
  const [allHeaders, setAllHeaders] = useState([])
  const [filteredRows, setFilteredRows] = useState([])

  return (
    <ShopContext.Provider
      value={
        {
          allRows,
          allHeaders,
          filteredRows,
          searchText,
          setAllHeaders,
          setAllRows,
          setFilteredRows,
          setSearchText,
        }
      }
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
