import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addTopping, removeTopping } from '../actions/index'

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
    // console.log("THIS IS MY HANDLE CHANGE topping BEING CALLED")
    // console.log(event.target.value)
    if(event.target.checked) {
      this.props.addTopping(event.target.value)
    } else {
      this.props.removeTopping(event.target.value)
    }
  }


  render() {
    return (<div>
      <div>
        <label className="form-label">Pick up to 3 toppings:</label>
        <div className="checkbox-group" onChange={this.handleOnSelect}>
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
