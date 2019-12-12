import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import TurboDelievery from './TurboDelievery'


class Price extends PureComponent {

  totalPrice() {
    const turboMoney = this.props.pizza.turboPrice
    const pizzaMoney = this.props.pizza.basePrice + this.props.pizza.saucePrice + this.props.pizza.toppingPrice
    return (pizzaMoney + (pizzaMoney * turboMoney)).toFixed(2)
  }

  render() {

    return (

      <div className='OrderDetails'>
        <h3>Order:</h3>
        <ul>
          <li>Base: {this.props.pizza.base} &euro;{(this.props.pizza.basePrice).toFixed(2)}</li>
          <li>Sauce: {this.props.pizza.sauce}  &euro;{(this.props.pizza.saucePrice).toFixed(2)}</li>
          <li>Toppings: &euro;{(this.props.pizza.toppingPrice).toFixed(2)}</li>
          <ul> {this.props.pizza.topping.length > 0 && this.props.pizza.topping.map(topping => {
            return (<li key ={topping}>{topping} &euro;0.50</li>)
          })} </ul>
        </ul>
        <TurboDelievery />
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
