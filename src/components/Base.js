import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {addBase} from '../actions/index'

const baseTypes = ["25cm NY Style", "30cm NY Style", "35cm NY Style", "20cm NY Style"]

class Base extends PureComponent {

  handleChange = (event) => {
    console.log("THIS IS MY HANDLE CHANGE base BEING CALLED")
    console.log(event.target.value)
    this.props.addBase(event.target.value)
  }

  render() {
    return (<div>
      <div className="form-group">
        <label>Pick your base:
          <select name='base' onChange={this.handleChange} className="form-select">
            <option value="">Select a base..</option>
            {
              baseTypes.map(baseType => {
                return (<option key={baseType} value={baseType}>{baseType}</option>);
              })
            }
          </select>
        </label>
      </div>
    </div>);
  }
}


const mapStateToProps = (state) => {
  return {base: state.base}
}

export default connect(mapStateToProps, {addBase})(Base)

{/* <form> */
} {/* <label>
      Pick a base:
      <select value={this.props.value}  onChange={this.handleChange}> */
} {/* <option value ="25cm NY Style">25cm NY Style € 8,99</option>
        <option value ="30cm NY Style">30cm NY Style € 11,49</option>
        <option value ="35cm NY Style">35cm NY Style € 13,49</option>
        <option value ="20cm NY Style">20cm NY Style € 6,45</option> */
} {/* <option value=''>Select a base..</option>
        {baseTypes.map(baseType => (<option value = {baseType} key={baseType}>{baseType}</option>))}
      </select>
    </label>
  </form> */
}
