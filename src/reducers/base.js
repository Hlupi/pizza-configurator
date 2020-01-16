import { ADD_BASE } from '../actions/index'
import { bases } from '../data'

const initialState = {
    name: '',
    price: 0
}

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case ADD_BASE:
            const base = bases.find((b) => b.name === action.payload)
            return {
                ...state,
                ...base
            }
        default:
            return state
        }
    }
