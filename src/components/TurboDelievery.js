import React from 'react';
import { connect } from 'react-redux'
import { addTurboDelievery, removeTurboDelievery } from '../actions/index'


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
      <label key={i}>{option}
        <input type="checkbox" onChange={handleOnSelect} value={option} />
      </label>
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
