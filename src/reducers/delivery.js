import { ADD_TURBO_DELIEVERY, REMOVE_TURBO_DELIEVERY } from '../actions/index'
import { deliveryOptions } from '../data'

const initialState = {
    name: '',
    price: 0
}

export default function (state = initialState, action = {}) {
    switch (action.type) {

        case ADD_TURBO_DELIEVERY:
            const delivery = deliveryOptions.find(d => d.name === action.payload)
            return {
                ...state,
                ...delivery
            }
        case REMOVE_TURBO_DELIEVERY:
            return {
                ...state,
                name: false,
                price: 0
            }
        default:
            return state
    }
}
