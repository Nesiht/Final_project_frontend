import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { user } from "./reducers/user"
import { Header } from 'components/Header'
import { LandingPage } from './components/LandingPage'
import { Login } from 'components/Login'
import { Logout } from 'components/Logout'
import { Signup } from 'components/Sigup'
import { Dashboard } from 'components/Dashboard'

import Draft from 'components/Draft'
import { entrie } from 'reducers/entrie'

const reducer = combineReducers({
  user: user.reducer,
  entrie: entrie.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to ="/home" exact/>
          </Route>

          <Route path="/home" exact>
            <LandingPage />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/signup" exact>
            <Signup />
          </Route>

          <Route path="/draft" exact>
            <Draft />
          </Route>

          <Route path="/logout" exact>
            <Logout />
          </Route>

          <Route path="/lockerRoom/:id" exact>
            <Dashboard />
          </Route>

          <Route path="/url/:variable" exact>
            {/* UNIQUE COMPONENT HERE FOR EXAMPLE */}
          </Route>
        
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
