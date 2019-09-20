import React, { useContext, useEffect } from 'react'
import shopContext from '../context/shop-context'
import Background from './Background'
import Header from './Header'
import RouteContainer from './RouteContainer'
import Footer from './Footer'
import tableData from '../json/framework_database.json'
import categories from '../json/explanations.json'

function App() {
  const context = useContext(shopContext)

  const formatHeaders = () => {
    return [{ 'name': 'Categories', 'url': '', 'year': '' }, ...tableData]
  }

  const formatRows = () => {
    const rows = []
    for (const cat in categories) {
      const rowData = []
      for (const header of formatHeaders()) {
        if (header.categories !== undefined) {
          rowData.push([header.name, header.categories[cat]])
        } else {
          rowData.push([categories[cat].title, categories[cat].description])
        }
      }
      rows.push(rowData)
    }
    return rows
  }

  const formatCuratedCategories = () => {
    return Object.keys(categories)
      .map((key) => [key, categories[key]])
      .reduce((cats, catData) => {
        let catKey = catData[1].category
        let title = catData[1].title
        cats[catKey] ? cats[catKey].push(title) : (cats[catKey] = [title])
        return cats
      }, {})
  }

  useEffect(() => {
    context.setAllRows(formatRows())
    context.setAllHeaders(formatHeaders())
    context.setFilteredRows(formatRows())
    context.setCuratedCategories(formatCuratedCategories())
  }, [])

  return (
    <div className="App">
      <Background />
      <Header />
      <RouteContainer />
      <Footer />
    </div>
  )
}

export default App
