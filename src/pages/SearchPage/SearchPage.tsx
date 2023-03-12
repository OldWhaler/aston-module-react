import { useSearchParams, useNavigate } from 'react-router-dom';

import { SearchForm } from '../../components/SearchForm';

import { CharacterCard } from '../../components/CharacterCard';
import { useGetFilteredCharactersQuery } from '../../store';

import './SearchPage.scss';

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const nameQuery: string = searchParams.get('name') || '';
  const { data: characters, isError, isLoading } = useGetFilteredCharactersQuery(nameQuery);

  if (isLoading) return (<h2 className='loading-message'>Данные загружаются...</h2>);
  if (isError) return (
    <>
      <button className='button' onClick={() => navigate(-1)}>назад</button>
      <h2 className='error-message'>По Вашему запросу ничего не найдено.</h2>
    </>
  );

  if (characters) {
    return (
      <>
        <button className='button' onClick={() => navigate(-1)}>назад</button>
        <div className='search-page'>
          <SearchForm />
          <div className='search-page__list'>
            {characters.map(character => <CharacterCard key={character.id} character={character} />)}
          </div>
        </div>
      </>
    );
  }
  return null;
};

export { SearchPage };