import React from 'react'
import styled from 'styled-components'

import color from '../assets/palettes/main.scss'

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${color.red600};
`

const FooterSection = styled.footer`
  margin: 0 auto;
  width: 75%;
  max-width: 63em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.gray50};
  span {
    color: ${color.green300};
  }
`

function Footer() {
  return (
    <FooterContainer>
      <FooterSection>
        Sponsored by&nbsp;<span>Borkers Anonymous</span>&nbsp;and&nbsp;
        <span>Awoos All Around</span>
      </FooterSection>
    </FooterContainer>
  )
}

export default Footer
