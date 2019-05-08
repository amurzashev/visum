import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import modalReducer from './modalReducer';
import accountReducer from './accountReducer';
import authReducer from './authReducer';
import universityReducer from './universityReducer';
import errorReducer from './errorReducer';
import routingReducer from './routingReducer';
import professorReducer from './professorReducer';
import themeReducer from './themeReducer';
import blogReducer from './blogReducer';

const rootReducer = combineReducers(
  {
    auth: authReducer,
    cities: homeReducer,
    modal: modalReducer,
    account: accountReducer,
    university: universityReducer,
    error: errorReducer,
    routing: routingReducer,
    professor: professorReducer,
    theme: themeReducer,
    blog: blogReducer
  }
);

export default rootReducer;
