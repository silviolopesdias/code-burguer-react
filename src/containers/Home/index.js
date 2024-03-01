import React from 'react'

import LogoHome from '../../assets/logoHome.svg'
import { CategoryCarrossel, OffersCarrossel } from '../../components'
import { Container, HomeImage } from './styles'

export function Home() {
  return (
    <Container>
      <HomeImage src={LogoHome} alt="home-logo" />
      <CategoryCarrossel />
      <OffersCarrossel />
    </Container>
  )
}
