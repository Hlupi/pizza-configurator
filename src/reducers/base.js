import { ADD_BASE, ADD_SAUCE, ADD_TOPPING } from '../actions/index'

const initialState = {
  base: '',
  sauce: '',
  topping: [],
  turbo: false,
  price: 0
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
  case ADD_BASE:
    return {
      ...state,
      base: state.base = action.payload
    }
  case ADD_SAUCE:
    return {
      ...state,
      sauce: state.sauce = action.payload
    }
  case ADD_TOPPING:
    if (state.topping.length < 3) {
      return {
        ...state,
        topping: state.topping.concat(action.payload)
      }
    } else {
      alert("You may only add 3 toppings")
      return {...state}
    }


  default:
    return state
  }
}
