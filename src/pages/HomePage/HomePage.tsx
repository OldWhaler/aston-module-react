import { SearchForm } from '../../components/SearchForm';
import { CharactersList } from '../../components/CharactersList';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <SearchForm />
      <CharactersList />
    </div>
  );
};

export { HomePage };