export const ADD_BASE = 'ADD_BASE'
export const ADD_SAUCE = 'ADD_SAUCE'
export const ADD_TOPPING = 'ADD_TOPPING'
export const ADD_TURBO_DELIEVERY = 'ADD_TURBO_DELIEVERY'
export const REMOVE_TOPPING = 'REMOVE_TOPPING'
export const REMOVE_TURBO_DELIEVERY = 'REMOVE_TURBO_DELIEVERY'

export const addBase = (base) => {
  return {
    type: ADD_BASE,
    payload: base
  }
}

export const addSauce = (sauce) => {
  return {
    type: ADD_SAUCE,
    payload: sauce
  }
}

export const addTopping = (topping) => {
  return {
    type: ADD_TOPPING,
    payload: topping
  }
}

export const removeTopping = (topping) => {
  return {
    type: REMOVE_TOPPING,
    payload: topping
  }
}

export const addTurboDelievery = (choice) => {
  return {
    type: ADD_TURBO_DELIEVERY,
    payload: choice
  }
}
export const removeTurboDelievery = (choice) => {
  return {
    type: REMOVE_TURBO_DELIEVERY,
    payload: choice
  }
}
