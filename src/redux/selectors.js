import { createSelector } from "@reduxjs/toolkit";

//contacts
export const selectorContacts = state => state.contacts.contacts.items;
export const selectorIsLoading = state => state.contacts.contacts.isLoading;
export const selectorError = state => state.contacts.contacts.error;

//filter
export const selectorFilter = state => state.filter.filter;

//filtered contacts
export const selectorFilteredContacts = createSelector([selectorFilter, selectorContacts], (filter, items) => {
  return items.filter(contact => contact.name.toLowerCase().includes(filter))
})

//auth
export const selectorIsLoggedIn = state => state.auth.isLoggedIn;
export const selectorUsername = state => state.auth.user.name;
export const selectorIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
