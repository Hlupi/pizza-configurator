import React from 'react'
import { connect } from 'react-redux'

import { toppings as toppingsOptions } from '../data'
import { addTopping, removeTopping } from '../actions/index'
import Fieldset from './fragments/form-elements'
import Select from './fragments/select'


const Toppings = ({ toppings, removeTopping, addTopping }) => {
  
  const checked = (topping) => toppings.find(t => t.name === topping)

  const handleOnSelect = (e) => {
    if (checked(e.target.value)) {
      removeTopping(e.target.value)
    } else {
      addTopping(e.target.value)
    }
  }

  const renderToppings = toppingsOptions.map((topping, i) => {
    return (
      <Select
        key={i}
        type='checkbox'
        price={`€${topping.price.toFixed(2)}`}
        value={topping.name}
        onChange={handleOnSelect}
        name='toppings'
        label={topping.name}
        checked={checked(topping.name)}
      />
    )
  })

  return (
    <Fieldset legend="Pick your toppings">
      {renderToppings}
    </Fieldset>
  )
}

const mapStateToProps = state => {
  return {
    toppings: state.toppings
  }
}

export default connect(mapStateToProps, { addTopping, removeTopping })(Toppings)
