import React, { useContext } from "react";
import shopContext from "../context/shop-context"
import Description from "./Description";
import ModalContainer from "./modals/ModalContainer";
import TableContainer from "../shared/table/TableContainer";

const MainContainer = () => {
  const context = useContext(shopContext)

  // const formatCategoryData = () => {
  //   return Object.keys(categories).map(key => [key, categories[key]]);
  // };


  const filterRows = () => {
    return context.allRows.filter((row) => row[0][0].toLowerCase().includes(context.searchText.toLowerCase()))
  }

  const filterHeaders = () => {
    return context.allHeaders.filter((header) => header.name.toLowerCase().includes(context.searchText.toLowerCase()))
  }

  return (
    <div>
      <Description />
      <TableContainer
        headers={context.allHeaders}
        rows={filterRows()}
      />
      <ModalContainer />
    </div>
  );
};

export default MainContainer;
