import { Search } from '../../components/Search';
import { CharactersList } from '../../components/CharactersList';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Search />
      <CharactersList />
    </div>
  )
}

export { HomePage }