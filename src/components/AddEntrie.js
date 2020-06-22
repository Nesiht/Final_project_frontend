import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-rangeslider'
import { user } from '../reducers/user'
import { Btn } from 'components/Btn'
import { Text, Formentry, Input, Title } from 'components/style'
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
  const [ title, setTitle ] = useState('')
  const [ grade, setGrade ] = useState(5)
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  )

  const raw = convertToRaw(editorState.getCurrentContent())
  
  const handleEditor = (data) => {
    setEditorState(data)
    dispatch(entrie.actions.setCurrentEntry(raw))
  }
  
  const handleSaveSuccess =  (response) => {
    const statusMessage = JSON.stringify(response.message)
    dispatch(user.actions.setStatusMessage({ statusMessage }))
    dispatch(entrie.actions.setUpdate())
  }
  
  const ErrorMessage = (error) => {
    const message = JSON.stringify(error.message)
    dispatch(user.actions.setStatusMessage({ message }))
  }

  const handleSave = (event) => {
    event.preventDefault()

    fetch(entrieUrl, {
      method: 'POST',
      body: JSON.stringify({ title , text: raw , grade: +grade , userid }),
      headers: { 'Content-Type': 'application/json', Authorization: accessToken },
    })
      .then((res) => res.json())
      .then((json) => handleSaveSuccess(json)) 
      .catch((err) => ErrorMessage(err))
      setTitle('')
      setEditorState(() => EditorState.createEmpty())
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
    <Formentry onSubmit={(e) => handleSave(e)}>
      <Title size='2em'>Write new entry</Title>
      <label>
        Title
      </label>
      <Input 
        type = "text"
        value = { title }
        onChange = {event => setTitle(event.target.value)}
      />

      <label>
        Text
      </label>
      <div className="RichEditor-root">
        <Editor editorState={editorState} onChange={handleEditor}/>
      </div>

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

      <Btn type="submit" title="Save" />
      {statusMessage && <Text small> {`${statusMessage}`} </Text>}
    </Formentry>
  )
}