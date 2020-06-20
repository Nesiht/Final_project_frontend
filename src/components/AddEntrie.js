import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-rangeslider'
import { user } from '../reducers/user'
import { Btn } from 'components/Btn'
import { Text, Form, Input, Title } from 'components/style'
import 'components/rangeSlider.css'
import { entrie } from 'reducers/entrie'

import {Editor, EditorState, convertToRaw} from 'draft-js'
import 'components/draft.css'

// Städa
// Lyckade meddelande fuckar up summeryentry när den ska hämta och lista entrys
// Kolla igenom koden en gång till

const entrieUrl = "http://localhost:8080/entries"

export const AddEntrie = () => {
  const dispatch = useDispatch()
  const userid = useSelector((store) => store.user.login.userId)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const statusMessage = useSelector((store) => store.user.login.statusMessage)

  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  )

  // Converts the current state of editorState to raw data
  const raw = convertToRaw(editorState.getCurrentContent())
  
  // Handle each change in the form, updates setEditorState with all the data, dispatch the raw data to redux
  const handleEditor = (data) => {
    setEditorState(data)
    dispatch(entrie.actions.setCurrentEntry(raw))
  }
  
  
  const [ title, setTitle ] = useState('')
  const [ text, setText ] = useState()
  const [ grade, setGrade ] = useState(5)
  
  const handleSaveSuccess =  (loginResponse) => {
    const statusMessage = JSON.stringify(loginResponse.message)
    dispatch(user.actions.setStatusMessage({ statusMessage }))
  }
  
  const ErrorMessage = (error) => {
    const message = JSON.stringify(error.message)
    dispatch(user.actions.setStatusMessage({ message }))
  }



  const handleSave = (event) => {
    event.preventDefault();

    fetch(entrieUrl, {
      method: 'POST',
      body: JSON.stringify({ title , text: raw , grade: +grade , userid }),
      headers: { 'Content-Type': 'application/json', Authorization: accessToken },
    })
      .then((res) => res.json())
      .then((json) => handleSaveSuccess(json)) 
      .catch((err) => ErrorMessage(err))
      setTitle('')
      setText('')
      setGrade('5')
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
    <Form onSubmit={(e) => handleSave(e)}>
      <Title>Write new entry</Title>
      <label>
        Titel
      </label>
      <Input 
        type = "text"
        value = { title }
        placeholder ="Title"
        onChange = {event => setTitle(event.target.value)}
      />
      {/* <label>
        Text
      </label> */}

      {/* <Draft /> */}
      {/* <Editortest /> */}
      <div className="RichEditor-root">
        <Editor editorState={editorState} onChange={handleEditor} />
        {/* {console.log('content state', editorState)} */}
      </div>

      {/* <Input 
        type = "text"
        value = { text }
        placeholder = "Text"
        onChange = {event => setText(event.target.value)}
      /> */}
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