import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Moment from 'react-moment'

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
   }, [])

  return (
    <>
      <Container>
        <Text>Summery of entries</Text>
      </Container>

      <Container color="pink" width="800px" justify="space-between" wrap="nowrap">
          <Text small bold paddingRight='15px' paddingLeft='15px'>Date</Text>
          <Text small bold paddingRight='15px' paddingLeft='15px'>Title</Text>
          <Text small bold paddingRight='15px' paddingLeft='15px'>Grade</Text>
      </Container>
      {/* CHECKING STORED DATA */}
      {/* {console.log(entriedata)} */}
      {entriedata.sort((a, b) => (a > b) ? 1 : -1).slice(0,3).map((entry) => (
        <Container key={entry._id} color="pink" width="800px" justify="space-between" wrap="nowrap">
          <Text small paddingRight='15px' paddingLeft='15px'>
            <Moment format="YYYY-MM-DD">
              {entry.createdAt}
            </Moment>
          </Text>
          <Text small paddingRight='15px' paddingLeft='15px'>{entry.title}</Text>
          <Text small paddingRight='15px' paddingLeft='15px'>{entry.grade}</Text>
        </Container>
      ))}
    </>
  )
}