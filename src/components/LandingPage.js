import React from 'react'
import { Cta } from 'components/Cta'
import { Features } from 'components/Features'
import { Login } from 'components/Login'
import { Signup } from 'components/Sigup'
import { Footer } from 'components/Footer'

export const LandingPage = () => {
  return (
    <>
    <p>Landing Page</p>
    <Cta />
    <Features />
    <Login />
    <Signup />
    <Footer />
    </>
  )
}