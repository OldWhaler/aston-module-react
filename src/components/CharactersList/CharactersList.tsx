import { useNavigate } from 'react-router-dom';

import { CharacterCard } from '../CharacterCard';
import { useGetAllCharactersPerPageQuery } from '../../store';
import { useBasicMathOperations } from '../../hooks/useBasicMathOperations';

import './CharactersList.scss';

const CharactersList = () => {
  const navigate = useNavigate();
  const { increment, decrement, number } = useBasicMathOperations(1, 42);
  const {
    data: characters,
    isError,
    isLoading
  } = useGetAllCharactersPerPageQuery(number);

  if (isLoading) return <h2 className='loading-message'>Данные загружаются...</h2>;
  if (isError) return (
    <>
      <button className='button' onClick={() => navigate(-1)}>назад</button>
      <h2 className='error-message'>Что-то пошло не так. Попробуйте зайти позже!</h2>
    </>
  );

  if (characters) {
    return (
      <>
        <ul className='characters-list'>
          {characters.map(character => <CharacterCard key={character.id} character={character} />)}
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