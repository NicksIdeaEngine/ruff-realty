import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import MainStyles from './styles/MainStyles'
import Header from './components/Header'
import Footer from './components/Footer'
import './assets/fonts/fonts.css'

const PageContainer = styled.div`
  margin: 0;
  padding: 0;
`

const Root = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <PageContainer className="page">
      <MainStyles>{children}</MainStyles>
    </PageContainer>
    <Footer />
  </>
)

Root.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Root
