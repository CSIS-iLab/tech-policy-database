import React, { useState } from "react";
import ShopContext from "./shop-context";

const GlobalState = props => {
  const [searchText, setSearchText] = useState('')
  const [allRows, setAllRows] = useState([])
  const [allHeaders, setAllHeaders] = useState([])
  const [filteredRows, setFilteredRows] = useState([])
  const [filterSubject, setFilterSubject] = useState('categories')
  const [curatedCategories, setCuratedCategories] = useState({})

  return (
    <ShopContext.Provider
      value={
        {
          allRows,
          allHeaders,
          curatedCategories,
          filteredRows,
          filterSubject,
          searchText,
          setAllHeaders,
          setAllRows,
          setCuratedCategories,
          setFilteredRows,
          setFilterSubject,
          setSearchText,
        }
      }
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
