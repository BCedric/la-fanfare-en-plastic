import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Fanfarons from './pages/Fanfarons'
import Home from './pages/Home'

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/fanfarons" component={Fanfarons} />
    </Switch>
  )
}

export default AppRouter
