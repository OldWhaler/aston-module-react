import { useInput } from '../../hooks/useInput';

import './Search.scss';

const Search = () => {
  const input = useInput();

  return (
    <div className='search'>
      <input
        className='search__input'
        type='text'
        placeholder='Кого будем искать?'
        {...input}
      />
      <button className='button'>search</button>
    </div>
  );
};

export { Search };