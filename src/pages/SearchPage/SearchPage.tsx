import { useSearchParams } from 'react-router-dom';

import { SearchForm } from '../../components/SearchForm';

import { CharacterCard } from '../../components/CharacterCard';
import { useGetFilteredCharactersQuery } from '../../store';
import { GoBackButton } from '../../components/Buttons';
import { ErrorMessageForRequest } from '../../components/ErrorMessageForRequest';
import { LoadingMessageForRequest } from '../../components/LoadingMessageForRequest';

import './SearchPage.scss';

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const nameQuery: string = searchParams.get('name') || '';
  const { data: characters, isError, isLoading } = useGetFilteredCharactersQuery(nameQuery);

  if (isLoading) return <LoadingMessageForRequest message='Данные загружаются...' />;
  if (isError) return (
    <>
      <GoBackButton />
      <ErrorMessageForRequest message='По Вашему запросу ничего не найдено.' />
    </>
  );

  if (characters) {
    return (
      <>
        <GoBackButton />
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