import {combineReducers} from 'redux';
import expensesReducer from './expense.js';
import categoriesRedcuer from './category.js';

export default combineReducers({
  expenses: expensesReducer,
  categories: categoriesReducer
});
