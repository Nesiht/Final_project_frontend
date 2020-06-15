import React from 'react'

// Styles
import { BgContainer, Container, CtaFocus, CtaSide, Title, Text, Svg } from 'components/style'

export const Footer = () => {
  return (
    <>
    <Container direction='column' color='#f7f7f7' wrap='no-wrap'>
      <Container justify='space-around' marginLeft='none' marginRight='none'>
        <Text small>Github</Text>
        <Text small>Stack Overflow</Text>
        <Text small>Portfolio</Text>
      </Container>
      <Container marginLeft='none' marginRight='none'>
        <Text small align='center' paddingLeft='10px' paddingRight='10px'>Founded in 2020, Hench is the largest, most trusted online workout diary for anyone!</Text>
      </Container>
    </Container>
    </>
  )
}