import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { user } from '../reducers/user'
import { Btn } from 'components/Btn'
import { Form, Input, Title, Text } from 'components/style'

const logInURL = "http://localhost:8080/sessions"

export const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const statusMessage = useSelector((store) => store.user.login.statusMessage)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleLoginSuccess =  (loginResponse) => {
    const statusMessage = JSON.stringify(loginResponse.message)
    dispatch(user.actions.setStatusMessage({ statusMessage }))
    dispatch(user.actions.setAccessToken({ accessToken: loginResponse.accessToken }))
    dispatch(user.actions.setUserId({ userId: loginResponse.userId }))

    if( loginResponse.accessToken ) {
      history.push(`/lockerRoom/${loginResponse.userId}`)
    } else {
      history.push(`/login`)
    }
  }
      
  const ErrorMessage = (error) => {
    const message = JSON.stringify(error.message)
    dispatch(user.actions.setStatusMessage({ message }))
  }

  const handleLogin = (event) => {
    event.preventDefault();

    fetch(logInURL, {
      method: 'POST',
      body: JSON.stringify({ email , password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => handleLoginSuccess(json))
      .catch((err) => ErrorMessage(err))
      setEmail('')
      setPassword('')
  }
    
  return (
    <>
      {!accessToken && 
        <Form onSubmit={(e) => handleLogin(e)}>
        <Title>Login</Title>
        <label>
          Email
        </label>
        <Input 
          type = "email"
          value = { email }
          placeholder ="Email"
          onChange = {event => setEmail(event.target.value)}
        />
        <label>
          Password
        </label>
        <Input 
          type = "password"
          value = { password }
          placeholder = "Password"
          onChange = {event => setPassword(event.target.value)}
        />
  
        <Btn type="submit" title="Log in" />
        {statusMessage && <Text small> {`${statusMessage}`} </Text>}
        </Form>
      }
      
      {accessToken && history.push(`/lockerRoom/${userId}`) }
    </>
  )
}