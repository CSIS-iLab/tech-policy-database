import React from "react";
import Description from "./Description";
import ModalContainer from "./modals/ModalContainer";
import TableContainer from "../shared/table/TableContainer";
import tableData from "../json/framework_database.json";
import categories from "../json/explanations.json";
import curatedCategories from "../json/curated_categories.json";

const MainContainer = () => {
  const formatCategoryData = () => {
    return Object.keys(categories).map(key => [key, categories[key]]);
  };

  const formatHeadings = () => {
    return [{ "name": "Categories", "url": "", "year": "" }, ...tableData];
  };

  const formatRows = () => {
    const rows = []
    for (const i in categories) {
      const rowData = []
      for (const j of formatHeadings()) {
        if (j.categories !== undefined) {
          // console.log(j.name, j.categories[i])
          rowData.push([j.name, j.categories[i]])
        } else {
          // console.log('----------', categories[i].title, categories[i].description)
          rowData.push([categories[i].title, categories[i].description])
        }
      }
      rows.push(rowData)
    }
    return rows
  }

  return (
    <div>
      <Description />
      <TableContainer
        // tableData={tableData}
        // categories={formatCategoryData()}
        // curatedCategories={curatedCategories}
        headers={formatHeadings()}
        rows={formatRows()}
      />
      <ModalContainer />
    </div>
  );
};

export default MainContainer;
