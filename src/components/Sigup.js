import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Btn } from 'components/Btn'
import { user } from '../reducers/user'

const signUpUrl = "localhost:8080/users"

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
    <form>
      <input 
        type = "email"
        placeholder ="email"
        /><br/>
      <input 
        type = "password"
        placeholder = "password"
        /><br/>
      <Btn type="submit" title="log in" />
    </form>
  )
}