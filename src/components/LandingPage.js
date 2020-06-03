import React from 'react'
import styled from 'styled-components'
import { Cta } from 'components/Cta'
import { Features } from 'components/Features'
import { Signup } from 'components/Sigup'
import { Footer } from 'components/Footer'


export const LandingPage = () => {
  return (
    <>
    <Cta />
    <Features />
    <Signup />
    <Footer />
    </>
  )
}