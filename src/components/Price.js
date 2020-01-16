import React  from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

import TurboDelievery from './TurboDelievery'
import { Flex } from './fragments/shared'
import { calculatePrice, calculateToppingsPrice } from '../helpers'


const Sublist = styled.ul`
  padding-left: 30px;
`

const Total = styled(Flex)`
  font-weight: bold;
`


const Price = ({ base, sauce, toppings, deliveryPrice }) => {

  const totalPrice = calculatePrice(base, sauce, toppings, deliveryPrice).toFixed(2)

    return (
      <div className='OrderDetails'>
        <h3>Order:</h3>
        <ul>
          <Flex as="li">Base: {base.name} <span>&euro;{(base.price.toFixed(2))}</span></Flex>
          <Flex as="li">Sauce: {sauce.name} <span>&euro;{(sauce.price.toFixed(2))}</span></Flex>
          <Flex as="li">Toppings: <span>&euro;{(calculateToppingsPrice(toppings)).toFixed(2)}</span></Flex>
          <Sublist>{toppings.map(topping => {
            return (<Flex as="li" key={topping.name}>{topping.name} <span>&euro;{topping.price.toFixed(2)}</span></Flex>)
          })} </Sublist>
        </ul>
        <TurboDelievery />
        <Total as="p">Total: <span>&euro;{totalPrice}</span></Total>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    base: state.base,
    sauce: state.sauce,
    toppings: state.toppings,
    deliveryPrice: state.delivery.price
  }
}

export default connect(mapStateToProps)(Price)
