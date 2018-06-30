import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addSauce } from '../actions/index'

const sauceTypes = ["White sauce", "Red sauce", "Double red sauce", "Mix it up"]

class Sauce extends PureComponent {

  handleChange = (event) => {
    console.log("THIS IS MY HANDLE CHANGE sauce BEING CALLED")
    console.log(event.target.value)
    this.props.addSauce(event.target.value)
  }

  render() {
    return (
      <div>
        <div className="form-group">
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
    sauce: state.sauce
  }
}

export default connect(mapStateToProps, { addSauce })(Sauce)
