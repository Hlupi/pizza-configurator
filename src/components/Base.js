import React from 'react'
import { connect } from 'react-redux'
import { addBase } from '../actions/index'
import { baseCost } from '../PizzaOptionsPrices'

import Input from './fragments/input'


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
      <Input key={i} type="radio" price={`€${baseCost[size]}`} value={size} onChange={handleChange} name="base" label={size} />
    )
  })
  return (
    <>
      <h3>Pick the base</h3>
      {renderBaseSizes}
    </>
  )
}

const mapStateToProps = state => {
  return {
    pizza: state.pizza,
  }
}

export default connect(mapStateToProps, { addBase })(Base)
