import React from 'react'
import { connect } from 'react-redux'

import { bases } from '../data'
import { addBase } from '../actions/index'
import Fieldset from './fragments/form-elements'
import Select from './fragments/select'


const Base = ({ addBase }) => {

  const handleChange = event => {
    addBase(event.target.value)
  }

  const renderBaseSizes = bases.map((base, i) => {
    return (
      <Select key={i} type="radio" price={`€${base.price.toFixed(2)}`} value={base.name} onChange={handleChange} name="base" label={base.name} />
    )
  })

  return (
    <>
      <Fieldset legend="Pick the base">
        {renderBaseSizes}
      </Fieldset>
    </>
  )
}

export default connect(null, { addBase })(Base)
