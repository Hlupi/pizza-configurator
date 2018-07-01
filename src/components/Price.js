import React, { PureComponent } from 'react';
import { connect } from 'react-redux'



class Price extends PureComponent {
  totalPrice() {
    const baseMoney = this.props.pizza.base ? this.props.pizza.basePrice : 0
    // console.log(baseMoney)
    const sauceMoney = this.props.pizza.sauce ? this.props.pizza.saucePrice : 0
    // console.log(sauceMoney)
    const toppingMoney = this.props.pizza.topping ? this.props.pizza.toppinPrice : 0
    // console.log(toppingMoney)
    const turboMoney = this.props.pizza.turbo ? this.props.pizza.turboPrice : 0
    // console.log(turboMoney)
    const pizzaMoney = baseMoney + sauceMoney + toppingMoney
    // console.log(pizzaMoney)
    return pizzaMoney + (pizzaMoney * turboMoney)
  }

  render() {

    return (

      <div>
        <h3>Total:</h3>
        <p>{this.totalPrice()}</p>
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
