import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CharacterCard } from '../../components/CharacterCard';
import { useAppSelector } from '../../hooks/useAppSelector';
import { CharacterInfo, useGetMultipleCharactersQuery } from '../../store';

import './FavoritesPage.scss';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const [favoritesList, setFavoritesList] = useState<CharacterInfo[]>([]);
  const favorites = useAppSelector(store => store.userSlice.favorites);
  const { data: characters, isError, isLoading } = useGetMultipleCharactersQuery(favorites.toString());

  useEffect(() => {
    if (characters) {
      setFavoritesList(characters)
    }
  }, [characters])

  if (isError) return <h2 className='homepage-error-message'>Что-то пошло не так. Попробуйте зайти позже!</h2>;
  if (isLoading) return <h2 className='loading-message'>Данные загружаются...</h2>;

  return (
    <>
      <button className='button' onClick={() => navigate(-1)}>назад</button>
      <div className='favorites-page'>
        {favoritesList.map(character => <CharacterCard key={character.id} character={character} />)}
      </div>
    </>
  )
}

export { FavoritesPage }