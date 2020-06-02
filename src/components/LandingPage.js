import React from 'react'
import styled from 'styled-components'
import { Cta } from 'components/Cta'
import { Features } from 'components/Features'
import { Login } from 'components/Login'
import { Signup } from 'components/Sigup'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'


export const LandingPage = () => {
  return (
    <>
    <Header />
    <Cta />
    <Features />
    <Login />
    <Signup />
    <Footer />
    </>
  )
}