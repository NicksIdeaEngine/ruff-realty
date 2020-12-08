import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import color from './assets/palettes/main.scss'
import panorama from './img/home-panorama.jpg'

const HomeContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${panorama});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const HomeSection = styled.section`
  height: 40em;
  width: 100%;
  max-width: 63em;
`

const HomeContent = styled.div`
  height: 100%;
  width: 100%;
`

function Home() {
  return (
    <>
      <HomeContainer className="app-container">
        <HomeSection>
          <HomeContent>
            <div>x</div>
          </HomeContent>
        </HomeSection>
      </HomeContainer>
    </>
  )
}

export default Home
