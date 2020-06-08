import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Btn } from 'components/Btn'

// Styles
import { Container, Text, BgContainer } from 'components/style'

// Test
import { AddEntrie } from 'components/AddEntrie'

// Need to add information if !token so that you can see as a user that you need to login in order to get access
// Create a useEffect to access users information, name, entries etc

export const Dashboard = () => {
  const ifToken = useSelector((store) => store.user.login.accessToken)
  const [newentry, setNewentry] = useState(false)
  const [entriedata, setEntriedata] = useState([])
  
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userid = useSelector((store) => store.user.login.userId)
  const handleClick = () => {setNewentry(newentry => !newentry)}

  const entrieUrl = `http://localhost:8080/entries/${userid}`

 useEffect(() => {
  fetch(entrieUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: accessToken },
  })
    .then((res) => res.json())
    .then((data) => setEntriedata(data))
    // .then((json) => handleLoginSuccess(json))
    // .catch((err) => ErrorMessage(err))
    console.log(`Entrie url to get data: `, entrieUrl)
    console.log(`data: `, entriedata)
 }, [])
  
  return (
    <>
      {ifToken && 
        <BgContainer>
          <Container >
            <Btn title="Write new entry" handleAction={handleClick} />
          </Container>
          {newentry && <AddEntrie />}
          <Container>
            <Text>Summery of entries</Text>
          </Container>
          <Container color="green" width="800px" justify="space-between" wrap="nowrap">
              <Text small paddingRight='15px' paddingLeft='15px'>Date</Text>
              <Text small paddingRight='15px' paddingLeft='15px'>Title</Text>
              <Text small paddingRight='15px' paddingLeft='15px'>Grade</Text>
          </Container>
          <Container color="yellow" width="800px" justify="space-between" wrap="nowrap">
              <Text small paddingRight='15px' paddingLeft='15px'>Date</Text>
              <Text small paddingRight='15px' paddingLeft='15px'>Title</Text>
              <Text small paddingRight='15px' paddingLeft='15px'>Grade</Text>
          </Container>
          <Container color="blue" width="800px" justify="space-between" wrap="nowrap">
              <Text small paddingRight='15px' paddingLeft='15px'>Date</Text>
              <Text small paddingRight='15px' paddingLeft='15px'>Title</Text>
              <Text small paddingRight='15px' paddingLeft='15px'>Grade</Text>
          </Container>
        </BgContainer>
      }
    </>
  )
}