import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Admin from './admin/Admin'
import DatesList from './admin/Dates/DatesList'

import Agenda from './pages/Agenda'
import Contact from './pages/Contact'

import Fanfarons from './pages/Fanfarons'
import Home from './pages/Home'
import Photos from './pages/media/Photos'
import Videos from './pages/media/Videos'
import Presse from './pages/Presse'
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
      <Route path="/videos" component={Videos} />
      <Route path="/photos" component={Photos} />
      <Route path="/agenda" component={Agenda} />
      <Route path="/presse" component={Presse} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />
    </Switch>
  )
}

export default AppRouter
