import { FormContact } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { ContactFilter } from './ContactFilter/ContactFilter';

export function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        fontSize: 20,
        backgroundColor: '#eefaff',
        borderRadius: '3px',
        boxShadow: '0 1px 5px rgba(51,35,15,.25)',
        margin: '70px auto',
        width: '400px',
        color: '#162031',
      }}
    >
      <h1>Phonebook</h1>
      <FormContact />
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      <ContactFilter />
      <Contacts />
    </div>
  );
}
