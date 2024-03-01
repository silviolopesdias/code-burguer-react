import React from 'react'

import LogoCart from '../../assets/imageCart.svg'
import { CartItems, CartResume } from '../../components'
import { Container, CartImage, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImage src={LogoCart} alt="cart-logo" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
