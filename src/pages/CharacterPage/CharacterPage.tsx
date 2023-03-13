import { useParams } from 'react-router-dom';

import { useGetCharacterByIdQuery } from '../../store';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { addToFavorites, removeFromFavorites } from '../../store';
import { GoBackButton } from '../../components/Buttons';

import './CharacterPage.scss';

const CharacterPage = () => {
  const dispatch = useAppDispatch();

  const { characterId = '' } = useParams();
  const favorites = useAppSelector(store => store.userSlice.favorites);
  const isLogged = useAppSelector(store => store.userSlice.isLogged);
  const { data: character, isError, isLoading } = useGetCharacterByIdQuery(characterId);

  const checkboxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(addToFavorites(character?.id as number));
    } else {
      dispatch(removeFromFavorites(character?.id as number));
    }
  };

  if (isError) return <h2 className='error-message'>Что-то пошло не так. Попробуйте зайти позже!</h2>;
  if (isLoading) return <h2 className='loading-message'>Данные загружаются...</h2>;

  if (character) {
    return (
      <>
        <GoBackButton />
        <div className='character-page'>

          {isLogged &&
            <>
              <input
                checked={favorites.includes(character.id)}
                type="checkbox"
                className="character-page__checkbox"
                id='checkbox'
                onChange={checkboxChangeHandler}
              />
              <label htmlFor='checkbox' className='character-page__checkbox-label' />
            </>
          }

          <div className="character-page__image">
            <img src={character.image} alt={character.name} />
          </div>

          <div className="character-page__text">
            <h3 className="character-page__title">{character.name}</h3>

            <div className="character-page__wrapper">
              <p>Status:</p>
              <p className='status'>
                {
                  character.status !== 'unknown' &&
                  <span className='status-indicator'
                    style={{ backgroundColor: character.status === 'Alive' ? '#55CC44' : '#D63D2E' }} />
                }
                <span>{character.status}</span>
              </p>
            </div>

            <div className="character-page__wrapper">
              <p>Species:</p>
              <p>{character.species}</p>
            </div>

            <div className="character-page__wrapper">
              <p>Gender:</p>
              <p>{character.gender}</p>
            </div>

            <div className="character-page__wrapper">
              <p>Last known location:</p>
              <p>{character.location.name}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  return null;
};

export { CharacterPage };