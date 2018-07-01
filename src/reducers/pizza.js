import { ADD_BASE, ADD_SAUCE, ADD_TOPPING, REMOVE_TOPPING, ADD_TURBO_DELIEVERY, REMOVE_TURBO_DELIEVERY } from '../actions/index'
import { baseCost, sauceCost, toppingCost, turboCost } from '../PizzaOptionsPrices'

const initialState = {
  base: '',
  basePrice: 0,
  sauce: '',
  saucePrice: 0,
  topping: [],
  toppinPrice: 0,
  turbo: '',
  turboPrice: 0
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
  case ADD_BASE:
    return {
      ...state,
      base: state.base = action.payload,
      basePrice: state.basePrice = baseCost[action.payload]
    }

  case ADD_SAUCE:
    return {
      ...state,
      sauce: state.sauce = action.payload,
      saucePrice: state.saucePrice = sauceCost[action.payload]
    }

  case ADD_TOPPING:
    if (state.topping.length < 3) {
      return {
        ...state,
        topping: state.topping.concat(action.payload),
        toppinPrice: state.toppinPrice += toppingCost[action.payload]
      }
    }
    else {
      alert("You may only add 3 toppings")
      return {...state}
    }

  case REMOVE_TOPPING :
    return {
      ...state,
      topping: state.topping.filter(topping => topping !== action.payload),
      toppinPrice: state.toppinPrice -= toppingCost[action.payload]
    }

  case ADD_TURBO_DELIEVERY:
    return {
      ...state,
      turbo: state.turbo = action.payload,
      turboPrice: state.turboPrice + turboCost[action.payload]
    }
  case REMOVE_TURBO_DELIEVERY:
    return {
      ...state,
      turbo: state.turbo = action.payload,
      turboPrice: state.turboPrice - turboCost[action.payload]

    }
  default:
    return state
  }
}
