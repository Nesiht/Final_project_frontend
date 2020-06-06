import React from 'react'

// Styles
import { Navbar, NavMenu, StyledLink } from 'components/style'


export const Header = () => {
  return (
    <>
      <Navbar>
        <NavMenu>
          <StyledLink to="/home">
            Home
          </StyledLink>
          <StyledLink to="/test" hidemobile>Features</StyledLink>
          <StyledLink to="/test1" hidemobile>Articles</StyledLink>
          <StyledLink to="/test2" hidemobile>Testimonials</StyledLink>
        </NavMenu>
        <NavMenu marginLeft>
          <StyledLink to="/login">
            Login
          </StyledLink>
          <StyledLink to="/signup">
            Sign up
          </StyledLink>
        </NavMenu>
      </Navbar>
    </>
  )
}