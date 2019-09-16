import React from "react";

const HeaderCell = props => {
  return (
    <td>
      <div>{props.content.name}</div>
    </td>
  )
};

export default HeaderCell;
