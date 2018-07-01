import React, { PureComponent } from 'react';
import Base from './Base'
import Sauce from './Sauce'
import Toppings from './Toppings'
import Price from './Price'
import TurboDelievery from './TurboDelievery'
import './Components.css'




class PizzaContainer extends PureComponent {
  render() {
    return (
      <div>
        <h1 className="title">Make it your own</h1>
        <Base />
        <Sauce />
        <Toppings />
        <TurboDelievery />
        <Price />
      </div>
    );
  }
}

export default PizzaContainer;
