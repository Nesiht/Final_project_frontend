import React from 'react'
import { NavLink } from 'react-router-dom'
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

const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  cursor: pointer;
  padding-right: .5rem;
  padding-left: .5rem;

  &.active {
    color: #ffffff;
    font-weight: 600;
  }
`

export const Header = () => {
  return (
    <>
      <Navbar>
        <NavMenu>
          <StyledLink to="/home">
            Home
          </StyledLink>
          <StyledLink to="/test">Features</StyledLink>
          <StyledLink to="/test1">Articles</StyledLink>
          <StyledLink to="/test2">Testimonials</StyledLink>
        </NavMenu>
        <NavMenu marginLeft>
          <StyledLink to="/login">
            Login
          </StyledLink>
          <StyledLink to="/test3">Sign in</StyledLink>
        </NavMenu>
      </Navbar>
    </>
  )
}