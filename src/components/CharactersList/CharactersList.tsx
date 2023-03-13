import { Link } from 'react-router-dom';

import { CharacterCard } from '../CharacterCard';
import { useGetAllCharactersPerPageQuery } from '../../store';
import { useBasicMathOperations } from '../../hooks/useBasicMathOperations';
import { ErrorMessageForRequest } from '../ErrorMessageForRequest';
import { LoadingMessageForRequest } from '../LoadingMessageForRequest';
import { GoBackButton } from '../Buttons';

import './CharactersList.scss';

const CharactersList = () => {
  const { increment, decrement, number } = useBasicMathOperations(1, 42);
  const {
    data: characters,
    isError,
    isLoading
  } = useGetAllCharactersPerPageQuery(number);

  if (isLoading) return <LoadingMessageForRequest message='Данные загружаются...' />;
  if (isError) return (
    <>
      <GoBackButton />
      <ErrorMessageForRequest message='Что-то пошло не так. Попробуйте зайти позже!' />
    </>
  );

  if (characters) {
    return (
      <>
        <ul className='characters-list'>
          {characters.map(character => (
            <li key={character.id}>
              <Link to={`/character/${character.id}`} className='characters-list__link'>
                <CharacterCard character={character} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="characters-list__button-wrapper">
          <button className='button' onClick={decrement}>prev</button>
          <button className='button' onClick={increment}>next</button>
        </div>
      </>
    );
  }

  return null;
};

export { CharactersList };