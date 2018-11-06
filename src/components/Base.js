import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addBase } from '../actions/index'
import { baseCost } from '../PizzaOptionsPrices'

import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

const baseTypes = ["20cm NY Style", "25cm NY Style", "30cm NY Style", "35cm NY Style"]

class Base extends PureComponent {
  state= {
    value: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value})
    this.props.addBase(event.target.value)
  }

  render() {
    return(<div>
      <FormControl>
        <FormLabel>Pick your base:</FormLabel>
        <RadioGroup
          aria-label="Base"
          onChange={this.handleChange}
          value={this.state.value}>
          {
            baseTypes.map(baseType => {
              return (<FormControlLabel key={baseType} value={baseType} control={<Radio />} label={baseType +' - €'+ baseCost[baseType]} />);
            })}
        </RadioGroup>

      </FormControl>
    </div>)
  }
}


const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addBase })(Base)
