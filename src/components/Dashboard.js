import React from 'react'
import { useSelector } from 'react-redux'
import { Btn } from 'components/Btn'

// Styles
import { Container, Text } from 'components/style'

// Need to add information if !token so that you can see as a user that you need to login in order to get access
// Create a useEffect to access users information, name, entries etc

export const Dashboard = () => {
  const ifToken = useSelector((store) => store.user.login.accessToken)
  
  return (
    <Container direction='column'>
      {ifToken && 
        <>
          <Text align='center'>You have a legit accessToken!</Text>
          <Btn title="Write new entry"/>
        </>
      }
    </Container>
  )
}