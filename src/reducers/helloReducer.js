import { HELLO_WORLD } from '../actions/types'

export default function (state = {}, action) {
  console.log(action.type === HELLO_WORLD)
  switch (action.type) {
    case HELLO_WORLD:
      return action.payload.data || false
    default:
      return state
  }
}
