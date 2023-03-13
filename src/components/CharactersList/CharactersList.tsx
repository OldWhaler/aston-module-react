import { CharacterCard } from '../CharacterCard';
import { useGetAllCharactersPerPageQuery } from '../../store';
import { useBasicMathOperations } from '../../hooks/useBasicMathOperations';
import { ErrorMessageForRequest } from '../ErrorMessageForRequest';

import './CharactersList.scss';

const CharactersList = () => {
  const { increment, decrement, number } = useBasicMathOperations(1, 42);
  const {
    data: characters,
    isError,
    isLoading
  } = useGetAllCharactersPerPageQuery(number);

  if (isLoading) return <h2 className='loading-message'>Данные загружаются...</h2>;
  if (isError) return <ErrorMessageForRequest message='Что-то пошло не так. Попробуйте зайти позже!' />;

  if (characters) {
    return (
      <>
        <ul className='characters-list'>
          {characters.map(character => (
            <CharacterCard
              key={character.id}
              character={character}
            />
          ))}
        </ul>
        <div className="characters-list__button-wrapper">
          <button
            className='button'
            onClick={decrement}
          >prev</button>
          <button
            className='button'
            onClick={increment}
          >next</button>
        </div>
      </>
    );
  }

  return null;
};

export { CharactersList };