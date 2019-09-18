import React, { useContext, useEffect } from "react";
import shopContext from "../context/shop-context"
import Background from "./Background";
import Header from "./Header";
import RouteContainer from "./RouteContainer";
import Footer from "./Footer";
import tableData from "../json/framework_database.json";
import categories from "../json/explanations.json";
import curatedCategories from "../json/curated_categories.json";

function App() {
  const context = useContext(shopContext)

  const formatHeaders = () => {
    return [{ "name": "Categories", "url": "", "year": "" }, ...tableData];
  };

  const formatRows = () => {
    const rows = []
    for (const i in categories) {
      const rowData = []
      for (const j of formatHeaders()) {
        if (j.categories !== undefined) {
          rowData.push([j.name, j.categories[i]])
        } else {
          rowData.push([categories[i].title, categories[i].description])
        }
      }
      rows.push(rowData)
    }
    return rows
  }

  useEffect(() => {
    context.setAllRows(formatRows())
    context.setAllHeaders(formatHeaders())
    context.setFilteredRows(formatRows())
  }, [])

  return (
    <div className="App">
      <Background />
      <Header />
      <RouteContainer />
      <Footer />
    </div>
  );
}

export default App;
