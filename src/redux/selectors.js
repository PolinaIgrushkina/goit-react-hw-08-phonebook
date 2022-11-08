import { createSelector } from "@reduxjs/toolkit";

export const selectorContacts = state => state.contacts.contacts.items;
export const selectorIsLoading = state => state.contacts.contacts.isLoading;
export const selectorError = state => state.contacts.contacts.error;
export const selectorFilter = state => state.filter.filter;

export const selectorFilteredContacts = createSelector([selectorFilter, selectorContacts], (filter, items) => {
  return items.filter(contact => contact.name.toLowerCase().includes(filter))
})