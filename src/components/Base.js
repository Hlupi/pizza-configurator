import React from 'react'
import { connect } from 'react-redux'

import { addBase } from '../actions/index'
import { baseCost } from '../PizzaOptionsPrices'
import { Legend } from './fragments/form-elements'
import Select from './fragments/select'


const baseTypes = [
  '20cm NY Style',
  '25cm NY Style',
  '30cm NY Style',
  '35cm NY Style',
]

const Base = props => {
  const handleChange = event => {
    props.addBase(event.target.value)
  }

  const renderBaseSizes = baseTypes.map((size, i) => {
    return (
      <Select key={i} type="radio" price={`€${baseCost[size].toFixed(2)}`} value={size} onChange={handleChange} name="base" label={size} />
    )
  })
  return (
    <fieldset>
      <Legend>Pick the base</Legend>
      {renderBaseSizes}
    </fieldset>
  )
}

const mapStateToProps = state => {
  return {
    pizza: state.pizza,
  }
}

export default connect(mapStateToProps, { addBase })(Base)
