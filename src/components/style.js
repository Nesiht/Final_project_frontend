import styled from 'styled-components';
import { NavLink } from 'react-router-dom'


// CTA
export const CtaBg = styled.div`
  background: linear-gradient(to right bottom,#f7f5fb 50%,#fff 50%);
  padding-top: 5rem;
  padding-bottom: 5rem;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.direction || 'row' };
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.width || '1144px' };

  @media (max-width: 768px) {
    max-width: 720px;
    flex-direction: column;
  }
`

export const CtaFocus = styled.div`
  text-align: left;
  padding-right: 3rem;
  max-width: 66%;

  @media (max-width: 768px) {
    max-width: 100%;
    order: 2;
    text-align: center;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 15px;
  }
`

export const CtaSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding-right: 3rem;
  max-width: 33%;

  @media (max-width: 768px) {
    max-width: 100%;
    order: 1;
    padding-right: 0;
  }
`

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1;
  font-weight: 500;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: calc(1.5rem + 3.3vw);
  }
`

export const Text = styled.p`
  font-size: ${props => props.small ? '0.9rem' : '1.5rem' };
  font-weight: 400;
  margin-bottom: 1.5rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`


// HEADER
export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 4rem;
  position: sticky;
  top: 0;
  background-color: pink ;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
  padding: .5rem 1rem;

  @media (max-width: 768px) {
    background-color: pink;
  }
`

export const NavMenu = styled.div`
  margin-left: ${props => props.marginLeft ? 'auto' : 0 };
`

export const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  cursor: pointer;
  padding-right: .5rem;
  padding-left: .5rem;

  &.active {
    color: #ffffff;
    font-weight: 600;
    text-decoration: underline;
  }
`


// BTN
export const Button = styled.button`
  background-color: pink;
  border: 1px solid transparent;
  padding: .8rem 2rem;
  font-weight: 600;
  font-size: 1.25rem;
  border-radius: .3rem;
  color: white;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: #AF7AC5;
    transition: 0.4s;
  }
`

// SIGNUP

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 25vw;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;

  @media (max-width: 768px) {
    max-width: 75vw;

  }
`

export const Input = styled.input`
  padding: 0.7rem 0rem 0.7rem 0.7rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 2px solid black;
  border-radius: .3rem;

  &:focus {
  background-color: #AED6F1;
  
}
`