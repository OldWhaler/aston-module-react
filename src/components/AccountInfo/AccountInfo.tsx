import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { returnToInitialState } from '../../store/userSlice';

import './AccountInfo.scss';

const AccountInfo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const login = useAppSelector(store => store.userSlice.name);

  const exitButtonClickHandler = () => {
    dispatch(returnToInitialState());
    navigate('/')
  }

  return (
    <nav className='account'>
      <p className='account__name'>{login}</p>
      <ul className='account__row'>
        <li><Button text='избранное' isColored={false} to='favorites' /></li>
        <li><Button text='история' isColored={false} to='history' /></li>
        <li>
          <button
            className={`button button_colored`}
            onClick={exitButtonClickHandler}
          >выйти</button>
        </li>
      </ul>
    </nav>
  )
}

export { AccountInfo }