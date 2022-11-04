import { configureStore } from "@reduxjs/toolkit";
import { contactListReducer } from "./ContactList/slice.contactList";
import { filterReducer } from "./Filter/slice.filter";

export const store = configureStore({
  reducer: {
    contacts: contactListReducer,
    filter: filterReducer,
  },
});