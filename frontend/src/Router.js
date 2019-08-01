import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import Edit from './components/Edit'
import Calculate from './components/Calculate';



const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/edit/:id" component={Edit} />
      <Route exact path="/calculate" component={Calculate} />
    </Switch>
  </BrowserRouter>
)

export default Router