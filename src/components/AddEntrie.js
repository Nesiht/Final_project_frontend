import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-rangeslider'
import { user } from '../reducers/user'
import { Btn } from 'components/Btn'
// import Draft from 'components/Draft'

// Styles
import { Text, Form, Input, Title } from 'components/style'
import 'react-rangeslider/lib/index.css'

const entrieUrl = "http://localhost:8080/entries"

export const AddEntrie = () => {
  const dispatch = useDispatch()
  const userid = useSelector((store) => store.user.login.userId)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const statusMessage = useSelector((store) => store.user.login.statusMessage)

  const [ title, setTitle ] = useState('')
  const [ text, setText ] = useState('')
  const [ grade, setGrade ] = useState(5)

  const handleLoginSuccess =  (loginResponse) => {
    const statusMessage = JSON.stringify(loginResponse.message)
    dispatch(user.actions.setStatusMessage({ statusMessage }))
  }
      
  const ErrorMessage = (error) => {
    const message = JSON.stringify(error.message)
    dispatch(user.actions.setStatusMessage({ message }))
  }

  const handleLogin = (event) => {
    event.preventDefault();

    fetch(entrieUrl, {
      method: 'POST',
      body: JSON.stringify({ title , text, grade: +grade , userid }),
      headers: { 'Content-Type': 'application/json', Authorization: accessToken },
    })
      .then((res) => res.json())
      .then((json) => handleLoginSuccess(json))
      .catch((err) => ErrorMessage(err))
      setTitle('')
      setText('')
      setGrade('')
  };

  const handleSliderChange = (value) => {
    setGrade(value)
  }

  const horizontalLabels = {
    0: 'Bad',
    5: 'Okay',
    10: 'Excellent'
  }


   return (
    <Form onSubmit={(e) => handleLogin(e)}>
      <Title>Add new entry</Title>
      <label>
        Titel
      </label>
      <Input 
        type = "text"
        value = { title }
        placeholder ="Title"
        onChange = {event => setTitle(event.target.value)}
      />
      <label>
        Text
      </label>
      <Input 
        type = "text"
        value = { text }
        placeholder = "Text"
        onChange = {event => setText(event.target.value)}
      />
      <label>
        Grade
      </label>
      <Slider
        value = {grade}
        min = {0}
        max = {10}
        orientation = "horizontal"
        onChange = {handleSliderChange}
        labels = {horizontalLabels}
      />

      {/* <Draft /> */}
      
      <Btn type="submit" title="Send" />
      {statusMessage && <Text small> {`${statusMessage}`} </Text>}
    </Form>
  )
}