import { SearchForm } from '../../components/SearchForm';
import { CharactersList } from '../../components/CharactersList';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <SearchForm defaultValue='' />
      <CharactersList />
    </div>
  )
}

export { HomePage }