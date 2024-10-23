import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import {increment,decrement} from "./actions/action"
// console.log(counterReducer);

export const store = configureStore({
  reducer: {
   counter: counterReducer,
},
})