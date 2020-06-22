import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { entrie } from '../reducers/entrie'
import { SummaryEntrie } from 'components/SummaryEntrie'
import { Container, BgContainer } from 'components/style'
import { AddEntrie } from 'components/AddEntrie'

export const Dashboard = () => {
  const dispatch = useDispatch()
  const toggleUpdate = useSelector((store) => store.entrie.update)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userid = useSelector((store) => store.user.login.userId)
  const entrieUrl = `http://localhost:8080/entries/${userid}`

  useEffect(() => {
    fetch(entrieUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: accessToken },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(entrie.actions.setAllEntries(data))
      })
   }, [toggleUpdate])
  
  return (
    <>
      {accessToken && 
        <BgContainer>
          <Container width='80vw'>
            <AddEntrie />
            <Container direction='column' paddingTop='5rem'>
              <SummaryEntrie />
            </Container>
          </Container>
        </BgContainer>
      }
    </>
  )
}