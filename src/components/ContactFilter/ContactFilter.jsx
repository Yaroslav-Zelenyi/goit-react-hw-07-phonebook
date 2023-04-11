import { useDispatch } from 'react-redux';
import css from './ContactFilter.module.css';
import { setFilter } from 'redux/filterSlice';

export function ContactFilter() {
  const dispatch = useDispatch();

  const inputHandler = event => {
    const { value } = event.target;
    const search = value.trim().toLowerCase();
    dispatch(setFilter(search));
  };

  return (
    <input
      className={css.contactFilter__input}
      name="search"
      onChange={inputHandler}
    />
  );
}
