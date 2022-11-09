import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorError, selectorIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/ContactList/contacts-operations';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Form from 'components/Form/Form';

export default function ContactsView() {
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
