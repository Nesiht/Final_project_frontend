import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { user } from "./reducers/user"
import { LandingPage } from './components/LandingPage'

const reducer = combineReducers({
	user: user.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {/* COMPONENT LANDING PAGE HERE */}
            <p>Hello world!</p>
            <LandingPage />
          </Route>
          <Route path="/url/:variable" exact>
            {/* UNIQUE COMPONENT HERE FOR EXAMPLE */}
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
