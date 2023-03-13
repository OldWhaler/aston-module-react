import { GoBackButton } from '../../components/Buttons';
import { CharacterCard } from '../../components/CharacterCard';
import { ErrorMessageForRequest } from '../../components/ErrorMessageForRequest';
import { LoadingMessageForRequest } from '../../components/LoadingMessageForRequest';
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

  if (isLoading) return <LoadingMessageForRequest message='Данные загружаются...' />;
  if (isError) return <ErrorMessageForRequest message='Что-то пошло не так. Попробуйте зайти позже!' />;

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