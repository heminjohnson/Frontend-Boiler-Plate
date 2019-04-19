import { HELLO_WORLD } from '../actions/types'

export default function (state = null, action) {
  switch (action.type) {
    case HELLO_WORLD:
      return action.payload || false
    default:
      return state
  }
}
