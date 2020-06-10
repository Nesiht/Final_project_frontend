import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// Styles
import { Container, Text } from 'components/style'


export const SummeryEntrie = () => {
  const [entriedata, setEntriedata] = useState([])

  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userid = useSelector((store) => store.user.login.userId)

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
      <Container>
        <Text>Summery of entries</Text>
      </Container>
      {/* DEMO MOCKUP */}
      {/* <Container color="pink" width="800px" justify="space-between" wrap="nowrap">
          <Text small paddingRight='15px' paddingLeft='15px'>Date</Text>
          <Text small paddingRight='15px' paddingLeft='15px'>Title</Text>
          <Text small paddingRight='15px' paddingLeft='15px'>Grade</Text>
      </Container>
      <Container color="hotpink" width="800px" justify="space-between" wrap="nowrap">
          <Text small paddingRight='15px' paddingLeft='15px'>Date</Text>
          <Text small paddingRight='15px' paddingLeft='15px'>Title</Text>
          <Text small paddingRight='15px' paddingLeft='15px'>Grade</Text>
      </Container>
      <Container color="pink" width="800px" justify="space-between" wrap="nowrap">
          <Text small paddingRight='15px' paddingLeft='15px'>Date</Text>
          <Text small paddingRight='15px' paddingLeft='15px'>Title</Text>
          <Text small paddingRight='15px' paddingLeft='15px'>Grade</Text>
      </Container> */}
      {console.log(entriedata)}
      {entriedata.map((entry) => (
        <Container key={entry.createdAt} color="pink" width="800px" justify="space-between" wrap="nowrap">
          <Text small paddingRight='15px' paddingLeft='15px'>{entry.createdAt}</Text>
          <Text small paddingRight='15px' paddingLeft='15px'>{entry.title}</Text>
          <Text small paddingRight='15px' paddingLeft='15px'>{entry.grade}</Text>
        </Container>
      ))}
    </>
  )
}