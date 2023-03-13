import { Link, useNavigate, createSearchParams } from 'react-router-dom';

import { GoBackButton } from '../../components/Buttons';
import { useAppSelector } from '../../hooks/useAppSelector';

import './HistoryPage.scss';

const HistoryPage = () => {
  const history = useAppSelector(store => store.userSlice.history);

  if (history.length === 0) {
    return (
      <>
        <GoBackButton />
        <h2 className='loading-message'>У Вас нет истории поисков.</h2>
      </>
    );
  }

  return (
    <>
      <GoBackButton />

      <ul className='history-page'>
        {history.map(query => {
          const path = `/search?${createSearchParams({ 'name': query })}`;

          return (
            <li key={query}>
              <span>Историю по запросу </span>
              <span className='history-page__query'>{query} </span>
              <span>можно посмотреть </span>
              <Link className='history-page__link' to={path}>тут</Link>
            </li>
          );
        }
        )}
      </ul>
    </>
  );
};

export { HistoryPage };