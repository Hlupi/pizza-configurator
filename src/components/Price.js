import React, { PureComponent } from 'react';
import { connect } from 'react-redux'



class Price extends PureComponent {
  totalPrice() {
    const turboMoney = this.props.pizza.turboPrice
    const pizzaMoney = this.props.pizza.basePrice + this.props.pizza.saucePrice + this.props.pizza.toppinPrice
    return parseFloat(pizzaMoney + (pizzaMoney * turboMoney)).toFixed(2)
  }

  render() {

    return (

      <div className="optionSpacing">
        <h3>To Pay:</h3>
        <p>Base: {this.props.pizza.base} &euro;{this.props.pizza.basePrice}</p>
        <p>Sauce: {this.props.pizza.sauce}  &euro;{this.props.pizza.saucePrice}</p>
        <p id="finalPrice"><b>Total:</b> &euro;{this.totalPrice()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps)(Price)
