import React from "react";
import TableOptions from "./TableOptions";
import Table from "./Table";

const TableContainer = props => {
  return (
    <div>
      <TableOptions />
      <Table
        tableData={props.tableData}
        categories={props.categories}
        curatedCategories={props.curatedCategories}
      />
    </div>
  );
};

export default TableContainer;
