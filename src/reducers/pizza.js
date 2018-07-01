import { ADD_BASE, ADD_SAUCE, ADD_TOPPING, ADD_TURBO_DELIEVERY } from '../actions/index'
import { baseCost, sauceCost, toppingCost, turboCost } from './PizzaOptionsPrices'

const initialState = {
  base: '',
  sauce: '',
  topping: [],
  turbo: '',
  price: 0
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
  case ADD_BASE:
    return {
      ...state,
      base: state.base = action.payload,
      price: state.price += baseCost[action.payload]
    }

  case ADD_SAUCE:
    return {
      ...state,
      sauce: state.sauce = action.payload,
      price: state.price += sauceCost[action.payload]
    }

  case ADD_TOPPING:
    if (state.topping.length < 3) {
      return {
        ...state,
        topping: state.topping.concat(action.payload),
        price: state.price += toppingCost[action.payload]
      }
    }
    else {
      alert("You may only add 3 toppings")
      return {...state}
    }

  case ADD_TURBO_DELIEVERY:
    return {
      ...state,
      turbo: state.turbo = action.payload,
      price: state.price += state.price * turboCost[action.payload]

    }
  default:
    return state
  }
}
