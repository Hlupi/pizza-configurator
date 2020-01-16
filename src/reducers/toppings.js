import { ADD_TOPPING, REMOVE_TOPPING } from '../actions/index'
import { toppings } from '../data'

const initialState = []

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case ADD_TOPPING:
            const topping = toppings.find(t => t.name === action.payload)
            return [
                ...state, topping
            ]

        case REMOVE_TOPPING:
            return state.filter(topping => topping.name !== action.payload)
            
        default:
            return state
    }
}
