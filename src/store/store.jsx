import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';

// console.log(counterReducer);

export const store = configureStore({
  reducer: {
   counter: counterReducer,
},
})