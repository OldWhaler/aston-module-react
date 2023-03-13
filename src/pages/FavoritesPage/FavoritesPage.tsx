import { GoBackButton } from '../../components/Buttons';
import { CharacterCard } from '../../components/CharacterCard';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useGetMultipleCharactersQuery } from '../../store';

import './FavoritesPage.scss';

const FavoritesPage = () => {
  const favorites = useAppSelector(store => store.userSlice.favorites);
  const { data: characters, isError, isLoading } = useGetMultipleCharactersQuery(favorites.toString());

  if (favorites.length === 0) {
    return (
      <>
        <GoBackButton />
        <h2 className='loading-message'>У Вас нет избранных персонажей.</h2>
      </>
    );
  }

  if (isError) return <h2 className='error-message'>Что-то пошло не так. Попробуйте зайти позже!</h2>;
  if (isLoading) return <h2 className='loading-message'>Данные загружаются...</h2>;

  if (characters) {
    return (
      <>
        <GoBackButton />
        <div className='favorites-page'>
          {characters.map(character => <CharacterCard key={character.id} character={character} />)}
        </div>
      </>
    );
  }
  return null;
};

export { FavoritesPage };