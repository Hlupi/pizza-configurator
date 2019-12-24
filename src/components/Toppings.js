import React from 'react'
import { connect } from 'react-redux'
import { addTopping, removeTopping } from '../actions/index'
import { toppingCost } from '../PizzaOptionsPrices'

import Select from './fragments/select'

const toppings = ['Salami', 'Tomatoes', 'Mushrooms', 'Artichokes', 'Pineapple', 'Black olives', 'Green olives', 'Red onion', 'Spinach', 'Corn']
const Toppings = props => {
  const handleOnSelect = event => {
    if (props.pizza.topping.indexOf(event.target.value) !== -1) {
      props.removeTopping(event.target.value)
    } else if (event.target.checked) {
      // if (props.pizza.topping.length <= 2) {
      props.addTopping(event.target.value)
      // }
    }
  }
  const renderToppings = toppings.map((topping, i) => {
    return (
      <Select
        key={i}
        type='checkbox'
        price={`€${toppingCost[topping].toFixed(2)}`}
        value={topping}
        onChange={handleOnSelect}
        name='toppings'
        label={topping}
        checked={props.pizza.topping.indexOf(topping) !== -1}
      />
    )
  })
  return (
    <>
      <h3>Pick your toppings*:</h3>
      {renderToppings}
    </>
  )
}

const mapStateToProps = state => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addTopping, removeTopping })(Toppings)
