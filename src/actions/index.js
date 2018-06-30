export const ADD_BASE = 'ADD_BASE'
export const ADD_SAUCE = 'ADD_SAUCE'


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
