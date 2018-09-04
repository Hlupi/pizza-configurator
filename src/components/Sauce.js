import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addSauce } from '../actions/index'
import { sauceCost } from '../PizzaOptionsPrices'

// import './Components.css'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'

const sauceTypes = ["White sauce", "Red sauce", "Double red sauce", "Mix it up"]

class Sauce extends PureComponent {
  state= {
    value: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value})
    this.props.addSauce(event.target.value)
  }

  render() {
    return(<div>
      <FormControl>
        <FormLabel>Pick your sauce:</FormLabel>
        <RadioGroup
          aria-label="Base"
          onChange={this.handleChange}
          value={this.state.value}>
          {
            sauceTypes.map(sauceType => {
              return (<FormControlLabel key={sauceType} value={sauceType} control={<Radio />} label={sauceType +' - €'+ sauceCost[sauceType]} />);
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

export default connect(mapStateToProps, { addSauce })(Sauce)
