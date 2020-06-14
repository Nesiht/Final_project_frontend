import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Btn } from 'components/Btn'
import { SummeryEntrie } from 'components/SummeryEntrie'

// Styles
import { Container, Text, BgContainer } from 'components/style'

// Test
import { AddEntrie } from 'components/AddEntrie'

// Need to add information if !token so that you can see as a user that you need to login in order to get access
// Create a useEffect to access users information, name, entries etc

export const Dashboard = () => {
  const [displayEntryForm, setDisplayEntryForm] = useState(false)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  
  const handleClick = () => {setDisplayEntryForm(newentry => !newentry)}

  
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