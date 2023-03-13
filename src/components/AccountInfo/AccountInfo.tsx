import { useNavigate } from 'react-router-dom';

import { Button } from '../Buttons';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { returnToInitialState } from '../../store';

import './AccountInfo.scss';

const AccountInfo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const login = useAppSelector(store => store.userSlice.name);

  const exitButtonClickHandler = () => {
    dispatch(returnToInitialState());
    navigate('/');
  };

  return (
    <nav className='account'>
      <p className='account__name'>{login}</p>

      <ul className='account__row'>
        <li>
          <Button text='избранное' colored={false} to='favorites' />
        </li>
        <li>
          <Button text='история' colored={false} to='history' />
        </li>
        <li>
          <button className={'button button_colored'} onClick={exitButtonClickHandler}>выйти</button>
        </li>
      </ul>

    </nav>
  );
};

export { AccountInfo };