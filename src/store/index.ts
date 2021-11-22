import { createStore } from 'redux';
import options from '../utils/Opcoes';

const INITIAL_STATE = options;

function reducer(state = INITIAL_STATE, action) {
  return state;
}

export default createStore(reducer);
