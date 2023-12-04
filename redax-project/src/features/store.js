import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculator/CalculatorSlice'
import todosSlice from './todo/todoSlice'
const store = configureStore({
  reducer: {
    todos:todosSlice,
    calculator: calculatorReducer,
  },
});

export default store;
