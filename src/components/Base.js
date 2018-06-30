import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addBase } from '../actions/index'





class Base extends PureComponent {

  handleChange = (event) => {
    console.log("THIS IS MY HANDLE CHANGE base BEING CALLED")
    console.log(event.target.value)
    this.props.addBase(event.target.value)
  }



  render() {
    return (
      <div>
        <form>
          <label>
            Pick a base:
            <select value={this.props.value}  onChange={this.handleChange}>
              <option value ="25cm NY Style">25cm NY Style € 8,99</option>
              <option value ="30cm NY Style">30cm NY Style € 11,49</option>
              <option value ="35cm NY Style">35cm NY Style € 13,49</option>
              <option value ="20cm NY Style">20cm NY Style € 6,45</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    base: state.base
  }
}

export default connect(mapStateToProps, { addBase })(Base)
