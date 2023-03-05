import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { returnToInitialState } from '../../store/userSlice';
import { setLoginStatusInLocalStorageToFalse } from '../../helpers/setLoginStatusInLocalStorageToFalse';

import './AccountInfo.scss'

const AccountInfo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const login = useAppSelector(store => store.userSlice.loginName);

  const exitButtonClickHandler = () => {
    dispatch(returnToInitialState());
    setLoginStatusInLocalStorageToFalse();
    navigate('/');
  }

  return (
    <div className='account'>
      <p className='account__name'>{login}</p>
      <Button text='избранное' isColored={false} />
      <Button text='история' isColored={false} />
      <Button text='выйти' isColored={true} clickHandler={exitButtonClickHandler} />
    </div>
  )
}

export { AccountInfo }