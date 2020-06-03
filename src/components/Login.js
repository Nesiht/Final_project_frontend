import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../reducers/user'
import styled  from 'styled-components'

const logInURL = "localhost:8080/sessions";

export const Login = () => {
  const dispatch = useDispatch()

  const accessToken = useSelector((store) => store.user.login.accessToken)
  const statusMessage = useSelector((store) => store.user.login.statusMessage)

  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleLoginSuccess = (loginResponse) => {
    // For debugging only
    const statusMessage = JSON.stringify(loginResponse.message)
    dispatch(user.actions.setStatusMessage({ statusMessage }))

    // Set the login info
    dispatch(
      user.actions.setAccessToken({ accessToken: loginResponse.accessToken })
    );
    dispatch(
      user.actions.setUserId({ userId: loginResponse.userId }))
  }

  const handleLoginFailed = (loginError) => {
    const statusMessage = JSON.stringify(loginError.message)
    dispatch(user.actions.setStatusMessage({ statusMessage }))
    // Clear login values
    dispatch(user.actions.logout())
  }

  const handleLogin = (event) => {
    event.preventDefault();

    fetch(logInURL, {
      method: 'POST',
      body: JSON.stringify({ name: name, password: password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => handleLoginSuccess(json))
      .catch((err) => handleLoginFailed(err))
      setName('')
      setPassword('')
  };
    
  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <input 
        type = "email"
        value = { name }
        placeholder ="email"
        onChange = {event => setName(event.target.value)}
        /><br/>
      <input 
        type = "password"
        value = { password }
        placeholder = "password"
        onChange = {event => setPassword(event.target.value)}
        /><br/>
      <button 
        type = "submit">
        Log In
      </button>
    </form>
  )
}