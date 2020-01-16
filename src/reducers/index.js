import { combineReducers } from 'redux'

import base from './base'
import sauce from './sauce'
import toppings from './toppings'
import delivery from './delivery'

export default combineReducers({
  base,
  sauce,
  toppings,
  delivery
})
