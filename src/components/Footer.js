import React from 'react'

// Styles
import { Container, Text } from 'components/style'

export const Footer = () => {
  return (
    <>
    <Container direction='column' color='#f7f7f7' width='100vw'>
      <Container justify='flex-start' marginLeft='none' marginRight='none'>
        <Text small paddingLeft='20px'>Github</Text>
        <Text small paddingLeft='20px'>Stack Overflow</Text>
        <Text small paddingLeft='20px'>Portfolio</Text>
      </Container>
      <Container marginLeft='none' marginRight='none' justify='flex-start'>
        <Text small paddingLeft='20px'>Founded in 2020, Hench is the largest, most trusted online workout diary for anyone!</Text>
      </Container>
    </Container>
    </>
  )
}