import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addTurboDelievery } from '../actions/index'

const delievryOptions = ["Hell yeah!", "No, robots are here to kill us"]

class TurboDelievery extends PureComponent {

  handleOnSelect = (event) => {
    console.log("THIS IS MY HANDLE CHANGE turbo delievery BEING CALLED")
    console.log(event.target.value)
    this.props.addTurboDelievery(event.target.value)
  }


  render() {
    return (
      <div>
        <div>
          <label>For only 10% on top of my order I would like the turbo-drone-delivery:</label>
          <div className="radio-group" onChange={this.handleOnSelect}> {
            delievryOptions.map(delievryOption => {
              return (<label key={delievryOption}><input className="form-radio" name={delievryOption} value={delievryOption} type="radio" />{delievryOption}</label>)
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.price
  }
}

export default connect(mapStateToProps, {addTurboDelievery})(TurboDelievery);
