import React from 'react'
import RouteContainer from './RouteContainer'
import { setScrollbarWidth } from './scrollbar'

function App() {
  setScrollbarWidth()

  return (
    <div className="App">
      <RouteContainer />
    </div>
  )
}

export default App
