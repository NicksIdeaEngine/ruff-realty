import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MainContainer = styled.main`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1rem;
    font-weight: 100;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }

  h1 {
    font-size: 3.25rem;
  }

  h2 {
    font-size: 2.62671rem;
  }

  h3 {
    font-size: 2.18316rem;
  }

  h4 {
    font-size: 1.38316rem;
  }

  h5 {
    font-size: 1.38316rem;
  }

  h6 {
    font-size: 1.38316rem;
  }

  p {
    margin-bottom: 0.5em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }

  li {
    font-family: 'Fira Code', sans-serif;
    font-weight: 300;
  }
`

const MainStyles = ({ children }) => (
  <MainContainer className="main-container">{children}</MainContainer>
)

MainStyles.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainStyles
