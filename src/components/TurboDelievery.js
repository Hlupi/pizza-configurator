import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addTurboDelievery, removeTurboDelievery } from '../actions/index'

const delievryOptions = ["Hell yeah!"]

class TurboDelievery extends PureComponent {

  handleOnSelect = (event) => {
    // console.log("THIS IS MY HANDLE CHANGE turbo delievery BEING CALLED")
    // console.log(event.target.value)
    if(event.target.checked) {
      this.props.addTurboDelievery(event.target.value)
    } else {
      this.props.removeTurboDelievery(event.target.value)
    }
  }


  render() {
    return (
      <div>
        <div>
          <label>For only 10% on top of my order I would like the turbo-drone-delivery:</label>
          <div className="radio-group" onChange={this.handleOnSelect}> {
            delievryOptions.map(delievryOption => {
              return (<label key={delievryOption}><input className="form-checkbox" name={delievryOption} value={delievryOption} type="checkbox" />{delievryOption}</label>)
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
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addTurboDelievery, removeTurboDelievery })(TurboDelievery);
