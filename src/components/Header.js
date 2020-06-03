import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 4rem;
  position: sticky;
  top: 0;
  background-color: #5DADE2 ;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
  padding: .5rem 1rem;

  @media (max-width: 768px) {
    background-color: pink;
  }
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
          <Link to="/">
            Home
          </Link>
          <Span>Features</Span>
          <Span>Articles</Span>
          <Span>Testimonials</Span>
        </NavMenu>
        <NavMenu marginLeft>
          <Link to="/login">
            Login
          </Link>
          <Span>Sign in</Span>
        </NavMenu>
      </Navbar>
    </>
  )
}