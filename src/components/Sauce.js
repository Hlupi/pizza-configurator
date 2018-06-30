import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addSauce } from '../actions/index'


class Sauce extends PureComponent {

  handleChange = (event) => {
    console.log("THIS IS MY HANDLE CHANGE sauce BEING CALLED")
    console.log(event.target.value)
    this.props.addSauce(event.target.value)
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Pick a sauce:
            <select onChange={this.handleChange}>
              <option value ="White sauce">White sauce</option>
              <option value ="Red sauce">Red sauce</option>
              <option value ="Double red sauce">Double red sauce € 1,00</option>
              <option value ="Mix it up">Mix it up € 1,50</option>

            </select>
          </label>
        </form>
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
