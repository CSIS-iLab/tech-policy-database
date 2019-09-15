import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = props => {
  return (
    <div>
      <table>
        <TableHeader tableData={props.tableData} />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
