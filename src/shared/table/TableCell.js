import React from "react";

const TableCell = props => {
  return typeof props.content[1] !== "object" ? (
    <td>
      <div>{props.content[0]}</div>
    </td>
  ) : (
    <td>
      <div>{props.content[1].abbreviated_lang}</div>
    </td>
  );
};

export default TableCell;
