import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Btn } from 'components/Btn'
import { user } from '../reducers/user'

// Styles
import { Form, Title, Input } from 'components/style'

const signUpUrl = "http://localhost:8080/users"

export const Signup = () => {
  const dispatch = useDispatch()
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const accessToken = useSelector((store) => store.user.login.accessToken)
  const statusMessage = useSelector((store) => store.user.login.statusMessage)

  const ErrorMessage = (error) => {
    const message = JSON.stringify(error.message)

    dispatch(user.actions.setStatusMessage({ message }))
    dispatch(user.actions.logout())
  }

  const handleSignUp = (event) => {
    event.preventDefault()

    fetch(signUpUrl, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json'}
    })
    .then((res) => res.json())
    .then((json) => Signup(json))
    .catch((err) => ErrorMessage(err))
    setName('')
    setEmail('')
    setPassword('')
    
  }

  return (
    <>
      <Form onSubmit={(e) => handleSignUp(e)}>
        <Title>Sign up</Title>
        <Input
        type = "text"
        required
        minLength={2}
        maxLength={20}
        value = { name }
        placeholder = "name"
        onChange = {event => setName(event.target.value)}
        />
        <Input 
        type="email"
        required
        minLength={3}
        value = { email }
        placeholder = "email"
        onChange = {event => setEmail(event.target.value)}
        />
        <Input 
        type="password"
        required
        minLength={8}
        value = { password }
        placeholder = "password"
        onChange = {event => setPassword(event.target.value)}
        />
        <Btn type="submit" title="log in" />
      </Form>
    </>
  )
}