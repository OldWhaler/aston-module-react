import { useNavigateSearch } from '../../hooks/useNavigateSearch';
import { useInput } from '../../hooks/useInput';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addToHistory } from '../../store/userSlice';

import './SearchForm.scss';

interface SearchFormProps {
  defaultValue: string
}

const SearchForm = ({ defaultValue }: SearchFormProps) => {
  const dispatch = useAppDispatch();
  const navigateSearch = useNavigateSearch();
  const { value, onChange } = useInput(defaultValue);

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = value.trim().toLowerCase();
    if (query.length < 3) return;

    dispatch(addToHistory(query));
    navigateSearch('/search', { 'name': query });
  };

  return (
    <form className='search' onSubmit={formSubmitHandler}>
      <input
        className='search__input'
        type='text'
        placeholder='Кого будем искать?'
        value={value}
        onChange={onChange}
        style={{ color: value.trim().length < 3 ? '#f00' : 'inherit' }}
      />
      <input type='submit' className='button' value='search' />
    </form>
  );
};

export { SearchForm };