import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addSauce } from '../actions/index'
// import './Components.css'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'

const sauceTypes = ["White sauce", "Red sauce", "Double red sauce", "Mix it up"]

class Sauce extends PureComponent {

  handleChange = (event) => {
    this.props.addSauce(event.target.value)
  }

  render() {
    // return (
    //   <div>
    //     <div className="form-group">
    //       <label>Pick your sauce:
    //         <select name='sauce' onChange={this.handleChange} className="form-select">
    //           <option value="">Select a sauce..</option>
    //           {
    //             sauceTypes.map(sauceType => {
    //               return (<option key={sauceType} value={sauceType}>{sauceType}</option>);
    //             })
    //           }
    //         </select>
    //       </label>
    //     </div>
    //
    //   </div>
    // );
    return(<div>
      <FormControl>
        <FormLabel>Pick your sauce:</FormLabel>
        <RadioGroup
          aria-label="Base"
          onChange={this.handleChange}>
          {
            sauceTypes.map(sauceType => {
              return (<FormControlLabel key={sauceType} value={sauceType} control={<Radio />} label={sauceType} />);
            })}
        </RadioGroup>

      </FormControl>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addSauce })(Sauce)
