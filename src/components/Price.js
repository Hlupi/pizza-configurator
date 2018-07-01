import React, { PureComponent } from 'react';
import { connect } from 'react-redux'




class Price extends PureComponent {
  render() {

    return (

      <div>
        <h3>Total:</h3>
        <p></p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.price
  }
}

export default connect(mapStateToProps)(Price)
