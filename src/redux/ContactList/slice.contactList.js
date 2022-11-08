import { addContact, deleteContact, fetchContacts } from './operations';
const { createSlice } = require("@reduxjs/toolkit");

export const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
}

const contactListSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.items.push({ name: action.payload.name, phone: action.payload.phone, id: action.payload.id })
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactListReducer = contactListSlice.reducer;

  