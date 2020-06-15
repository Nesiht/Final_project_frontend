import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { entrie } from '../reducers/entrie'
import { Btn } from 'components/Btn'
import { SummeryEntrie } from 'components/SummeryEntrie'

// Styles
import { Container, BgContainer } from 'components/style'

// Test
import { AddEntrie } from 'components/AddEntrie'

// Need to add information if !token so that you can see as a user that you need to login in order to get access
// Create a useEffect to access users information, name, entries etc

export const Dashboard = () => {
  const [displayEntryForm, setDisplayEntryForm] = useState(false)
  const dispatch = useDispatch()

  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userid = useSelector((store) => store.user.login.userId)
  const entrieUrl = `http://localhost:8080/entries/${userid}`

  const handleClick = () => {setDisplayEntryForm(newentry => !newentry)}

  useEffect(() => {
    fetch(entrieUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: accessToken },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(entrie.actions.setEntrie(data))
      })
   }, [])
  
  return (
    <>
      {accessToken && 
        <BgContainer>
          <Container >
            <Btn title="Write new entry" handleAction={handleClick} />
          </Container>
          {displayEntryForm && <AddEntrie />}
          <SummeryEntrie />
        </BgContainer>
      }
    </>
  )
}