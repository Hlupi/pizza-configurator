import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addTurboDelievery, removeTurboDelievery } from '../actions/index'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'


const deliveryOptions = ["Yes, please!"]

class TurboDelievery extends PureComponent {

  handleOnSelect = (event) => {
    if(event.target.checked) {
      this.props.addTurboDelievery(event.target.value)
    } else {
      this.props.removeTurboDelievery(event.target.value)
    }
  }

  render() {
    return (<div>
      <FormControl>
        <FormLabel>Turbo-drone-delivery (+ 10%):</FormLabel>
        <FormGroup>
          {deliveryOptions.map(deliveryOption => {
            return (
              <FormControlLabel key={deliveryOption} control={<Checkbox
                onChange={this.handleOnSelect}
                value={deliveryOption} />
              }
              label={deliveryOption} />
            )
          })}

        </FormGroup>
      </FormControl>
    </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addTurboDelievery, removeTurboDelievery })(TurboDelievery);
