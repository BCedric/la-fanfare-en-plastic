import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Fanfarons from './pages/Fanfarons'
import Home from './pages/Home'
import DansLaRue from './pages/spectacles/DansLaRue'
import FabuleuseHistoire from './pages/spectacles/FabuleuseHistoire'
import Fanfaronnades from './pages/spectacles/Fanfaronnades'
import Rouages from './pages/spectacles/Rouages'

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/fanfarons" component={Fanfarons} />
      <Route path="/fanfaronnades" component={Fanfaronnades} />
      <Route path="/un-grain-dans-rouages" component={Rouages} />
      <Route path="/fabuleuse-histoire" component={FabuleuseHistoire} />
      <Route path="/dans-la-rue" component={DansLaRue} />
    </Switch>
  )
}

export default AppRouter
