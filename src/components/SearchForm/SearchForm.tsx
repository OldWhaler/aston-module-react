import { Link } from 'react-router-dom';

import { useNavigateSearch } from '../../hooks/useNavigateSearch';
import { useInput } from '../../hooks/useInput';
import { useDebounce } from '../../hooks/useDebounce';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addToHistory } from '../../store';
import { useGetFilteredCharactersQuery } from '../../store';

import './SearchForm.scss';

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const navigateSearch = useNavigateSearch();

  const { value, setValue, onChange } = useInput('');
  const debouncedValue = useDebounce(value, 400);

  const { data: characters, isError } = useGetFilteredCharactersQuery(debouncedValue, {
    skip: debouncedValue.length < 3
  });

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = value.trim().toLowerCase();
    if (query.length < 3) return;

    dispatch(addToHistory(query));
    navigateSearch('/search', { 'name': query });
    setValue('');
  };

  return (
    <form className='search' onSubmit={formSubmitHandler}>
      <div className='search__input-wrapper'>
        <button
          type="button"
          className='search__btn-cross'
          onClick={() => setValue('')}
        />
        <input
          className='search__input'
          type='text'
          placeholder='Кого будем искать?'
          value={value}
          onChange={onChange}
          style={{ color: value.trim().length < 3 ? '#f00' : 'inherit' }}
        />

        {!isError && value.length >= 3 && characters &&
          <ul className='search__suggestion-list'>
            {characters.slice(0, 5).map(character => {
              return (
                <li key={character.id}>
                  <Link
                    to={`/character/${character.id}`}
                    className="search__suggestion-link"
                  >{character.name}</Link>
                </li>
              );
            })}
          </ul>}

      </div>
      <input type='submit' className='button' value='search' />
    </form>
  );
};

export { SearchForm };