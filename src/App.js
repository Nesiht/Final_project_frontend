import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { user } from "./reducers/user"
import { LandingPage } from './components/LandingPage'
import { Login } from 'components/Login'
import { Header } from 'components/Header'


const reducer = combineReducers({
	user: user.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to ="/home" /> <LandingPage />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/url/:variable" exact>
            {/* UNIQUE COMPONENT HERE FOR EXAMPLE */}
          </Route>
        
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
