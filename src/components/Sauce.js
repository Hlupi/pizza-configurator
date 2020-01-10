import React from 'react';
import { connect } from 'react-redux'

import { addSauce } from '../actions/index'
import { sauceCost } from '../PizzaOptionsPrices'
import { Legend } from './fragments/form-elements'
import Select from './fragments/select'

const sauceTypes = ["White sauce", "Red sauce", "Double red sauce", "Mix it up"]


const Sauce = (props) => {
  const handleChange = event => {
      props.addSauce(event.target.value)
  }
  const renderSauces = sauceTypes.map((sauce,i) => {
    return (
      <Select key={i} type="radio" price={`€${sauceCost[sauce].toFixed(2)}`} value={sauce} onChange={handleChange} name="sauce" label={sauce} />
    )
  })
  return (
    <fieldset>
      <Legend>Pick your sauce</Legend>
      {renderSauces}
    </fieldset>
  )
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addSauce })(Sauce)
