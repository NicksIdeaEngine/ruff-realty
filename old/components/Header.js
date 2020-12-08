import React from 'react'
import styled from 'styled-components'

import Doggo from '../lib/doggo'
import color from '../assets/palettes/main.scss'
import ruffLogo from '../img/ruff-realty-logo.png'

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1em;
`

const HeaderSection = styled.header`
  margin: 0 auto;
  width: 100%;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: end;
`

const InfoContainer = styled.div`
  height: 100%;
  margin: 0.25em;
  color: ${color.yellow900};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const LogoContainer = styled.div`
  padding: 0;
  display: flex;
`

const LogoBackground = styled.div`
  height: 5em;
  width: 5em;
  border-radius: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.yellow900};
`

const LogoText = styled.span`
  font-size: 2.25em;
  color: ${color.gray50};
`

const CompanyInfo = styled.div`
  padding-left: 1em;
  height: 5em;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
`

const CompanyName = styled.div`
  font-size: 1em;
  color: ${color.blueGray900};
  width: 100%;
  margin: 0.25em 0 0.5em;
`

const Address = styled.div`
  font-size: 0.65em;
  color: ${color.blueGray600};
  width: 100%;
  margin: 0 0 0.25em;
`

const PhoneNumber = styled.div`
  font-size: 0.75em;
  color: ${color.blueGray600};
  width: 100%;
`

const NavContainer = styled.nav`
  flex-grow: 6;
  height: 100%;
`

const NavList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

const NavItem = styled.li`
  padding: 0.5em 1em;
  margin: 0 1em;
  color: ${color.yellow900};
  font-weight: 500;
  font-size: 0.75em;
`

const NavLink = styled.a`
  font-size: 1.25em;
`

function Header() {
  return (
    <HeaderContainer>
      <HeaderSection>
        <InfoContainer>
          <LogoContainer>
            <LogoBackground>
              <LogoText>R&R</LogoText>
            </LogoBackground>
          </LogoContainer>
          <CompanyInfo>
            <CompanyName>Ruff Realty | "Roofs for Floofs"</CompanyName>
            <Address>
              55th Ave, just past the kitchen, 2nd crate on the left
            </Address>
            <PhoneNumber>111.123.1123</PhoneNumber>
          </CompanyInfo>
        </InfoContainer>
        <NavContainer>
          <NavList>
            <NavLink href="../">
              <NavItem>Home</NavItem>
            </NavLink>
            <NavLink href="../pages/about">
              <NavItem>About</NavItem>
            </NavLink>
            <NavLink href="../pages/gallery">
              <NavItem>Gallery</NavItem>
            </NavLink>
            <NavLink href="../pages/reviews">
              <NavItem>Reviews</NavItem>
            </NavLink>
            <NavLink href="../pages/team">
              <NavItem>Team</NavItem>
            </NavLink>
            <NavLink href="../pages/blog">
              <NavItem>Blog</NavItem>
            </NavLink>
            <NavLink href="../pages/contact">
              <NavItem>Contact</NavItem>
            </NavLink>
          </NavList>
        </NavContainer>
      </HeaderSection>
    </HeaderContainer>
  )
}

export default Header
