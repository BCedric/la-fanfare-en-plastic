import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
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
