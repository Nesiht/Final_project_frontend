import React, { useState } from 'react'
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
  const [ newentry, setNewentry ] = useState(false)

  const handleClick = () => {setNewentry(newentry => !newentry)}
  
  return (
    <>
      {ifToken && 
        <BgContainer>
          <Container >
            <Btn title="Write new entry" handleAction={handleClick} />
          </Container>
          {newentry && <AddEntrie />}
        </BgContainer>
      }
    </>
  )
}