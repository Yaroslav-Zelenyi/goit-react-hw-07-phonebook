import { useEffect } from 'react';
import { getContactsThunk } from '../../redux/thunks';
import { deleteContactThunk } from '../../redux/thunks';
import { useSelector, useDispatch } from 'react-redux';
import css from './Contacts.module.css';

export function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onClick = id => {
    dispatch(deleteContactThunk(id));
  };

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <ul className={css.contacts__list}>
      {filteredContact.map(({ id, name, phone }) => (
        <li className={css.contacts__item} key={id}>
          {name}: {phone}
          <button
            className={css.contacts__btn}
            onClick={() => onClick(id)}
            name={name}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
