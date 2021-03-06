import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Btn } from 'components/Btn'
import { user } from '../reducers/user'
import { Form, Title, Input, Text } from 'components/style'

const signUpUrl = "https://final-project-backend-v1.herokuapp.com/users"

export const Signup = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const statusMessage = useSelector((store) => store.user.login.statusMessage)

  const handleLoginSuccess = (loginResponse) => {
    const statusMessage = JSON.stringify(loginResponse.message)
    dispatch(user.actions.setStatusMessage({ statusMessage }))
    dispatch(user.actions.setAccessToken({ accessToken: loginResponse.accessToken }))
    dispatch(user.actions.setUserId({ userId: loginResponse.userId }))
    setName('')
    setEmail('')
    setPassword('')
    if( loginResponse.accessToken ) {
      history.push(`/lockerRoom/${loginResponse.userId}`)
    } else {
      history.push(`/login`)
    }
  }

  const ErrorMessage = (error) => {
    const message = JSON.stringify(error.message)
    dispatch(user.actions.setStatusMessage({ message }))
    dispatch(user.actions.logout())
    setName('')
    setEmail('')
    setPassword('')
  }

  const handleSignUp = (event) => {
    event.preventDefault()

    fetch(signUpUrl, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json'}
    })
    .then((res) => res.json())
    .then((json) => handleLoginSuccess(json))
    .catch((err) => ErrorMessage(err))
    setName('')
    setEmail('')
    setPassword('')
    
  }

  return (
    <>
      <Form onSubmit={(e) => handleSignUp(e)}>
        <Title>Sign up</Title>
        <label>
          Name
        </label>
        <Input
        type = "text"
        required
        minLength={2}
        maxLength={20}
        value = { name }
        placeholder = "Name"
        onChange = {event => setName(event.target.value)}
        />

        <label>
          Email
        </label>
        <Input 
        type="email"
        required
        minLength={3}
        value = { email }
        placeholder = "Email"
        onChange = {event => setEmail(event.target.value)}
        />

        <label>
          Password
        </label>
        <Input 
        type="password"
        required
        minLength={8}
        value = { password }
        placeholder = "Password"
        onChange = {event => setPassword(event.target.value)}
        />

        <Btn type="submit" title="Register" />
      {statusMessage && <Text small> {`${statusMessage}`} </Text>}
      </Form>
    </>
  )
}