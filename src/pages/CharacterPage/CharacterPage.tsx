import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CharacterInfo, useGetCharacterByIdQuery } from '../../store';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { addToFavorites, removeFromFavorites } from '../../store/userSlice';

import './CharacterPage.scss';

const CharacterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [character, setCharacter] = useState<CharacterInfo>();

  const { characterId = '' } = useParams();
  const favorites = useAppSelector(store => store.userSlice.favorites);
  const isLogged = useAppSelector(store => store.userSlice.isLogged);
  const { data, isError, isLoading } = useGetCharacterByIdQuery(characterId);

  useEffect(() => {
    if (data) {
      setCharacter(data)
    }
  }, [data])

  const checkboxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(addToFavorites(character?.id as number))
    } else {
      dispatch(removeFromFavorites(character?.id as number))
    }
  }

  if (isError) return <h2 className='homepage-error-message'>Что-то пошло не так. Попробуйте зайти позже!</h2>;
  if (isLoading) return <h2 className='loading-message'>Данные загружаются...</h2>;

  return (
    <>
      <button className='button' onClick={() => navigate(-1)}>назад</button>
      <div className='character-page'>

        {isLogged &&
          <>
            <input
              checked={favorites.includes(character?.id || 0)}
              type="checkbox"
              className="character-page__checkbox"
              id='checkbox'
              onChange={checkboxChangeHandler}
            />
            <label htmlFor='checkbox' className='character-page__checkbox-label' />
          </>
        }

        <div className="character-page__image">
          <img src={character?.image} alt={character?.name} />
        </div>

        <div className="character-page__text">
          <h3 className="character-page__title">{character?.name}</h3>

          <div className="character-page__wrapper">
            <p>Status:</p>
            <p className='status'>
              {
                character?.status !== 'unknown' &&
                <span className='status-indicator'
                  style={{ backgroundColor: character?.status === 'Alive' ? '#55CC44' : '#D63D2E' }} />
              }
              <span>{character?.status}</span>
            </p>
          </div>

          <div className="character-page__wrapper">
            <p>Species:</p>
            <p>{character?.species}</p>
          </div>

          <div className="character-page__wrapper">
            <p>Gender:</p>
            <p>{character?.gender}</p>
          </div>

          <div className="character-page__wrapper">
            <p>Last known location:</p>
            <p>{character?.location.name}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export { CharacterPage }