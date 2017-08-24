import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Template from '../containers/Template'
import JogoDaVelha from '../containers/JogoDaVelha'
import Profile from '../containers/Profile'


const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
    >
      <IndexRoute
        component={JogoDaVelha}
      />
      <Route
        path='/profile'
        component={Profile}
      />
    </Route>
  )
}

const Routes = createRoutes()

export default Routes
