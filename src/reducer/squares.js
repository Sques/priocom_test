import {squares} from '../mock'
import {arrToMap} from '../helpers'
import {UPDATE_SQUARE} from '../constants'

export default (state = arrToMap(squares), {type, payload}) => {
  switch(type){
    case UPDATE_SQUARE:
      console.log('Reducer UPDATE_SQUARE', payload, state);
      const {item} = payload;
      return {
        ...state,
        [item.id]: item
      };
  }
  return state;
}