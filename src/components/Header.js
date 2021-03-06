import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar, NavMenu, StyledLink } from 'components/style'

export const Header = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)

  return (
    <>
      <Navbar>
        <NavMenu>
          <StyledLink to="/home">
            Home
          </StyledLink>
        </NavMenu>

        <NavMenu marginLeft>
          {!accessToken && 
          <>
            <StyledLink to="/login">
              Login
            </StyledLink>
            <StyledLink to="/signup">
              Sign up
            </StyledLink>
            </>
          }
          {accessToken && 
            <>
              <StyledLink to={`/lockerRoom/${userId}`}>
                Dashboard
              </StyledLink>
              <StyledLink to="/logout">
                Logout
              </StyledLink>
            </>
          }
        </NavMenu>
        
      </Navbar>
    </>
  )
}