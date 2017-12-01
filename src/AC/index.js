import {UPDATE_SQUARE} from '../constants'

export function updateSquare(item){
  return {
    type: UPDATE_SQUARE,
    payload: {item}
  }
}