import { ADD_BASE, ADD_SAUCE } from '../actions/index'

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
  default:
    return state
  }
}
