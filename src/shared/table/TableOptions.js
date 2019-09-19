import React from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import TextResize from "./TextResize"

const TableOptions = () => {
  return (
    <div>
      <SearchBar />
      <FilterBar />
      <TextResize />
    </div>
  );
};

export default TableOptions;
