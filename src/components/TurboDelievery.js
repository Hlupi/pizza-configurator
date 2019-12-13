import React from 'react';
import { connect } from 'react-redux'
import { addTurboDelievery, removeTurboDelievery } from '../actions/index'

import Select from './fragments/select'


const deliveryOptions = ["Yes, please!"]

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
      <Select key={i} type="checkbox" value={option} onChange={handleOnSelect} label={option} tick />
    )
  })

  return (
    <>
    {renderDeliveryOptions}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addTurboDelievery, removeTurboDelievery })(Delivery);
