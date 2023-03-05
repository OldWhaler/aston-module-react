import { Button } from '../Button';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { returnToInitialState } from '../../store/userSlice';

import './AccountInfo.scss';

const AccountInfo = () => {
  const dispatch = useAppDispatch();
  const login = useAppSelector(store => store.userSlice.name);

  const exitButtonClickHandler = () => {
    dispatch(returnToInitialState());
  }

  return (
    <div className='account'>
      <p className='account__name'>{login}</p>
      <Button text='избранное' isColored={false} to='favorites' />
      <Button text='история' isColored={false} to='history' />
      <Button text='выйти' isColored={true} clickHandler={exitButtonClickHandler} to='/' />
    </div>
  )
}

export { AccountInfo }