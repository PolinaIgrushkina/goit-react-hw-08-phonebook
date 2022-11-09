import { combineReducers } from 'redux';
import { authReducer } from './Auth/auth-slice';
import { contactListReducer } from "./ContactList/slice.contactList";
import { filterReducer } from "./Filter/slice.filter";

export const rootReducer = combineReducers({
  contacts: contactListReducer,
  filter: filterReducer,
  auth: authReducer,
});