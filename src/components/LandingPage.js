import React from 'react'
import styled from 'styled-components'
import { Cta } from 'components/Cta'
import { Features } from 'components/Features'
import { Login } from 'components/Login'
import { Signup } from 'components/Sigup'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

const Text = styled.p`
  font-size: 20px;
  color: green;
`

export const LandingPage = () => {
  return (
    <>
    <Header />
    <Text>Landing page</Text>
    <Cta />
    <Features />
    <Login />
    <Signup />
    <Footer />
    </>
  )
}