import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { fetchContacts } from 'redux/ContactList/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectorError, selectorIsLoading } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </div>
  );
}
