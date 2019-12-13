import React from 'react';
import { connect } from 'react-redux'
import { addSauce } from '../actions/index'
import { sauceCost } from '../PizzaOptionsPrices'

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
    <>
      <h3>Pick your sauce</h3>
      {renderSauces}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addSauce })(Sauce)
