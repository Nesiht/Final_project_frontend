import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { user } from "./reducers/user"
import { LandingPage } from './components/LandingPage'

// TEST
import { Btn } from 'components/Btn'

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
            <LandingPage />
          </Route>
          <Route path="/url/:variable" exact>
            {/* UNIQUE COMPONENT HERE FOR EXAMPLE */}
          </Route>

          {/* TEST */}
          <Route path="/test" exact>
            <Btn />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
