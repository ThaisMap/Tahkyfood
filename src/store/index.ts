import optionsReducer from './options';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    optionsReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export { RootState, AppDispatch };
