import { ADD_SAUCE } from '../actions/index'
import { sauces } from '../data'

const initialState = {
    name: '',
    price: 0
}

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case ADD_SAUCE:
            const sauce = sauces.find(s => s.name === action.payload)
            return {
                ...state,
                ...sauce
            }
        default:
            return state
        }
    }
