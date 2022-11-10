import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import { authReducer } from './Auth/auth-slice';
import { contactListReducer } from "./ContactList/slice.contactList";
import { filterReducer } from "./Filter/slice.filter";
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const rootReducer = combineReducers({
  contacts: contactListReducer,
  filter: filterReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});




