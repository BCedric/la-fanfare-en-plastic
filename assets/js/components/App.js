import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './AppRouter'
import MenuBar from './MenuBar'

const App = () => {
  return (
    <Router>
      <MenuBar />
      <div className="content">
        <AppRouter />
      </div>
    </Router>
  )
}

export default App
