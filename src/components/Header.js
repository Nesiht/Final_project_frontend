import React from 'react'
import styled from 'styled-components'

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 4rem;
  position: sticky;
  top: 0;
  background-color: powderblue;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
  padding: .5rem 1rem;
`

const NavMenu = styled.div`
  margin-left: ${props => props.marginLeft ? 'auto' : 0 };
`

const Span = styled.span`
  padding-right: .5rem;
  padding-left: .5rem;
`

export const Header = () => {
  return (
    <>
      <Navbar>
        <NavMenu>
          <Span>Home</Span>
          <Span>Features</Span>
          <Span>Articles</Span>
          <Span>Testimonials</Span>
        </NavMenu>
        <NavMenu marginLeft>
          <Span>Login</Span>
          <Span>Sign in</Span>
        </NavMenu>
      </Navbar>
    </>
  )
}