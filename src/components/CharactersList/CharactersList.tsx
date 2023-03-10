import { CharacterCard } from '../CharacterCard';

import { CharacterInfo, useGetAllCharactersQuery } from '../../store';
import { useBasicMathOperations } from '../../hooks/useBasicMathOperations';

import './CharactersList.scss';

const emptyArray: CharacterInfo[] = [];

const CharactersList = () => {
  const { increment, decrement, number } = useBasicMathOperations(1, 42);
  const { data: characters = emptyArray, isError, isLoading } = useGetAllCharactersQuery(number);

  if (isError) return <h2 className='homepage-error-message'>Что-то пошло не так. Попробуйте зайти позже!</h2>;
  if (isLoading) return <h2 className='loading-message'>Данные загружаются...</h2>;

  return (
    <>
      <ul className='characters-list'>
        {characters.map(character => <CharacterCard key={character.id} character={character} />)}
      </ul>
      <div className="characters-list__button-wraper">
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
  )
}

export { CharactersList }