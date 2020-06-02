import React from 'react'
import styled from 'styled-components'


import { Btn } from 'components/Btn'

const CtaMain = styled.div`
  background: linear-gradient(to right bottom,#f7f5fb 50%,#fff 50%);
  padding-top: 5rem;
  padding-bottom: 5rem;

`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  max-width: 1144px;
`

const CtaFocus = styled.div`
  text-align: left;
  padding-right: 3rem;
  max-width: 66%;
`

const CtaFocus2 = styled.div`
  text-align: left;
  padding-right: 3rem;
  max-width: 33%;
`

export const Cta = () => {
  return (
    <CtaMain>
      <Container>
        <CtaFocus>
          <h1>
            Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
          </h1>
          <p>
            Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
          </p>
        </CtaFocus>
        <CtaFocus2>
          <h1>
            IMG
          </h1>
        </CtaFocus2>
      </Container>
    </CtaMain>
  )
}