import React from "react";
import Description from "./Description";
import ModalContainer from "./modals/ModalContainer";
import TableContainer from "../shared/table/TableContainer";
import tableData from "../json/framework_database.json";
import categories from "../json/explanations.json";
import curatedCategories from "../json/curated_categories.json";

const MainContainer = () => {
  return (
    <div>
      <Description />
      <TableContainer
        tableData={tableData}
        categories={categories}
        curatedCategories={curatedCategories}
      />
      <ModalContainer />
    </div>
  );
};

export default MainContainer;
