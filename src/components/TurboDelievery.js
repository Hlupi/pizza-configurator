import React from 'react';
import { connect } from 'react-redux'

import { deliveryOptions } from '../data'
import { addTurboDelievery, removeTurboDelievery } from '../actions/index'
import Fieldset from './fragments/form-elements'
import Select from './fragments/select'


const Delivery = props => {
  const handleOnSelect = (event) => {
    if(event.target.checked) {
      props.addTurboDelievery(event.target.value)
    } else {
      props.removeTurboDelievery(event.target.value)
    }
  }

  const renderDeliveryOptions = deliveryOptions.map((option, i) => {
    return (
      <Select key={i} type="checkbox" value={option.name} onChange={handleOnSelect} label={option.name} price="+10%" tick />
    )
  })

  return (
    <Fieldset legend="Add turbo drone delivery?" special>
      {renderDeliveryOptions}
    </Fieldset>
  )
}

export default connect(null, { addTurboDelievery, removeTurboDelievery })(Delivery);
