import React from 'react';
import { connect } from 'react-redux'

import { sauces } from '../data'
import { addSauce } from '../actions/index'
import Fieldset from './fragments/form-elements'
import Select from './fragments/select'


const Sauce = (props) => {

  const handleChange = event => {
      props.addSauce(event.target.value)
  }

  const renderSauces = sauces.map((sauce,i) => {
    return (
      <Select key={i} type="radio" price={`€${sauce.price.toFixed(2)}`} value={sauce.name} onChange={handleChange} name="sauce" label={sauce.name} />
    )
  })
  
  return (
    <Fieldset legend="Pick your sauce">
      {renderSauces}
    </Fieldset>
  )
}

export default connect(null, { addSauce })(Sauce)
