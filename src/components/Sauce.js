import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addSauce } from '../actions/index'
import './Components.css'

const sauceTypes = ["White sauce", "Red sauce", "Double red sauce", "Mix it up"]

class Sauce extends PureComponent {

  handleChange = (event) => {
    this.props.addSauce(event.target.value)
  }

  render() {
    return (
      <div>
        <div className="form-group optionSpacing">
          <label>Pick your sauce:
            <select name='sauce' onChange={this.handleChange} className="form-select">
              <option value="">Select a sauce..</option>
              {
                sauceTypes.map(sauceType => {
                  return (<option key={sauceType} value={sauceType}>{sauceType}</option>);
                })
              }
            </select>
          </label>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addSauce })(Sauce)
