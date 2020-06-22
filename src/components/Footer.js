import React from 'react'
import { Container, Text, StyledLink } from 'components/style'

export const Footer = () => {
  return (
    <>
    <Container direction='column' color='#f7f7f7' width='100vw'>
      <Container justify='flex-start' marginLeft='none' marginRight='none'>
        <Text small paddingLeft='20px'>
          <StyledLink to="/github">Github</StyledLink>
        </Text>
        <Text small paddingLeft='20px'>
          <StyledLink to="/linkedin">Linkedin</StyledLink>
        </Text>
        <Text small paddingLeft='20px'>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
        </Text>
        <Text small paddingLeft='20px'>
          <StyledLink to="/credits">Credits</StyledLink>
        </Text>
      </Container>
      <Container marginLeft='none' marginRight='none' justify='flex-start' >
        <Text small paddingLeft='20px'>Founded in 2020, Hench is the largest, most trusted online workout diary for everyone!</Text>
      </Container>
    </Container>
    </>
  )
}