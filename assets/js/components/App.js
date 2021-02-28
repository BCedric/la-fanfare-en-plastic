import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import AppRouter from './AppRouter'
import Footer from './Footer'
import MenuBar from './MenuBar'

const App = () => {
  return (
    <Router>
      <MenuBar />
      <div className="content">
        <AppRouter />
      </div>
      <Footer />
    </Router>
  )
}

export default App
