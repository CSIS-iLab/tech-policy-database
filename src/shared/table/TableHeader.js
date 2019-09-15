import React from "react";
import CategoryHeader from "./CategoryHeader";
import HeaderElement from "./HeaderElement";

const TableHeader = props => {
  return (
    <thead>
      <CategoryHeader />
      <HeaderElement />
    </thead>
  );
};

export default TableHeader;
