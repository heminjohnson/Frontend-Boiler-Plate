import axios from 'axios'
import { HELLO_WORLD } from './types'

export const helloWorld = () => async(dispatch) => {
  const res = await axios.get('/hello')

  dispatch({type: HELLO_WORLD, payload: res})
}
