import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorError, selectorIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/ContactList/contacts-operations';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Form from 'components/Form/Form';
import { DivStyled } from './ContactsView.styled';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <DivStyled>
      <h3>Phonebook</h3>
      <Form />

      <h3>Contacts</h3>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </DivStyled>
  );
}
