import React, { useContext } from 'react'
import shopContext from '../context/shop-context'
import Description from './Description'
import ModalContainer from './modals/ModalContainer'
import TableContainer from '../shared/table/TableContainer'

const MainContainer = () => {
  const context = useContext(shopContext)

  const filterLang = (lang) => {
    return context.allRows.filter((row) => {
      return row
        .slice(1)
        .some((cat) =>
          cat[1][lang].toLowerCase().includes(context.searchText.toLowerCase())
        )
    })
  }

  const filterRows = () => {
    switch (context.filterSubject) {
      case 'categories':
        return context.allRows.filter((row) =>
          row[0][0].toLowerCase().includes(context.searchText.toLowerCase())
        )
      case 'abbreviated_lang':
        return filterLang('abbreviated_lang')
      case 'original_lang':
        return filterLang('original_lang')
      default:
        return []
    }
  }

  const filterHeaders = () => {
    return context.allHeaders.filter((header) =>
      header.name.toLowerCase().includes(context.searchText.toLowerCase())
    )
  }

  return (
    <div>
      <Description />
      <TableContainer headers={context.allHeaders} rows={filterRows()} />
      <ModalContainer headers={context.allHeaders} />
    </div>
  )
}

export default MainContainer
