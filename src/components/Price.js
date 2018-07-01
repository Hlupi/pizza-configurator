import React, { PureComponent } from 'react';
import { connect } from 'react-redux'



class Price extends PureComponent {
  totalPrice() {
    const baseMoney = this.props.pizza.base ? this.props.pizza.basePrice : 0
    const sauceMoney = this.props.pizza.sauce ? this.props.pizza.saucePrice : 0
    const toppingMoney = this.props.pizza.topping ? this.props.pizza.toppinPrice : 0
    const turboMoney = this.props.pizza.turbo ? this.props.pizza.turboPrice : 0
    const pizzaMoney = baseMoney + sauceMoney + toppingMoney
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
