import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addTopping, removeTopping } from '../actions/index'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import FormHelperText from '@material-ui/core/FormHelperText'


const toppingTypes = [
  "Pineapple",
  "Corn",
  "Green olives",
  "Red onion",
  "Spinach",
  "Cherry tomatoes",
  "Chicken"
]

class Toppings extends PureComponent {

  handleOnSelect = (event) => {
    if(this.props.pizza.topping.indexOf(event.target.value) !== -1) {
      this.props.removeTopping(event.target.value)
    } else if(event.target.checked) {
      if(this.props.pizza.topping.length <= 2) {
        this.props.addTopping(event.target.value)
      }
    }
  }


  render() {
    return (<div>
      <FormControl>
        <FormLabel>Pick your toppings*:</FormLabel>
        <FormGroup>
          {toppingTypes.map(toppingType => {
            return (
              <FormControlLabel
                key={toppingType}
                control={
                  <Checkbox
                    onChange={this.handleOnSelect}
                    value={toppingType}
                    checked={this.props.pizza.topping.indexOf(toppingType) !== -1}
                  />
                }
                label={toppingType}/>
            )
          })}
        </FormGroup>
        <FormHelperText>*Choose up to 3 toppings</FormHelperText>
      </FormControl>

    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addTopping, removeTopping })(Toppings)
