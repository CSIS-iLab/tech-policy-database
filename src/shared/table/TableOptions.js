import React from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import TableTextResize from "./TableTextResize"

const TableOptions = () => {
  return (
    <div>
      <SearchBar />
      <FilterBar />
      <TableTextResize />
    </div>
  );
};

export default TableOptions;
