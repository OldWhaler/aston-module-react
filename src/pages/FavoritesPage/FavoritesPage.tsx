import { useNavigate } from 'react-router-dom';

import { CharacterCard } from '../../components/CharacterCard';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useGetMultipleCharactersQuery } from '../../store';

import './FavoritesPage.scss';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const favorites = useAppSelector(store => store.userSlice.favorites);
  const { data: characters, isError, isLoading } = useGetMultipleCharactersQuery(favorites.toString());

  if (isError) return <h2 className='error-message'>Что-то пошло не так. Попробуйте зайти позже!</h2>;
  if (isLoading) return <h2 className='loading-message'>Данные загружаются...</h2>;

  if (characters) {
    return (
      <>
        <button className='button' onClick={() => navigate(-1)}>назад</button>
        <div className='favorites-page'>
          {characters.map(character => <CharacterCard key={character.id} character={character} />)}
        </div>
      </>
    );
  }
  return null;
};

export { FavoritesPage };