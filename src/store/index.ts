import { createStore, combineReducers } from 'redux';
import optionsReducer from './options';

const rootReducer = combineReducers({
  options: optionsReducer,
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>;
