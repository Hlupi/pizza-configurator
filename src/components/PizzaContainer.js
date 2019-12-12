import React, { PureComponent } from 'react';
import styled from 'styled-components'

import Base from './Base'
import Sauce from './Sauce'
import Toppings from './Toppings'
import Price from './Price'
import Pizza from './Pizza'

const Container = styled.section`
  padding: 40px;
    & > svg {
        display: block;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        margin: 0 auto;
        max-width: 640px;
        border-radius: 5px;
        box-shadow: 10px 10px 20px #614030;
    }
`


class PizzaContainer extends PureComponent {

  render() {
    return (
      <Container>
        <h1>Make you delicious choices</h1>
        <h2>Pizza Pi</h2>
        <Pizza size={'200px'} />
        <Base />
        <Sauce />
        <Toppings />
        <Price />
      </Container>     
    )
  }
}

export default PizzaContainer
