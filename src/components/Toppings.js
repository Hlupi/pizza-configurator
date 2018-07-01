import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addTopping, removeTopping } from '../actions/index'
import './Components.css'

const toppingTypes = [
  "Pineapple",
  "Corn",
  "Olives (green)",
  "Red union",
  "Spinach",
  "Cherry tomatoes",
  "Chicken"
]

class Toppings extends PureComponent {

  handleOnSelect = (event) => {
    if(event.target.checked) {
      this.props.addTopping(event.target.value)
    } else {
      this.props.removeTopping(event.target.value)
    }
  }


  render() {
    return (<div>
      <div className="optionSpacing">
        <label className="form-label">Pick up to 3 toppings:</label>
        <div className="checkbox-group contentSpacing" onChange={this.handleOnSelect}>
          {
            toppingTypes.map(toppingType => {
              return (<label key={toppingType} className="form-label capitalize">
                <input className="form-checkbox" name={toppingType} value={toppingType}
                  type="checkbox" /> {toppingType}
              </label>);
            })
          }
        </div>
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addTopping, removeTopping })(Toppings)
