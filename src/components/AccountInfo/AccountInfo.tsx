import { Button } from '../Button';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { returnToInitialState } from '../../store/userSlice';

import './AccountInfo.scss';

const AccountInfo = () => {
  const dispatch = useAppDispatch();
  const login = useAppSelector(store => store.userSlice.name);

  return (
    <nav className='account'>
      <p className='account__name'>{login}</p>
      <ul className='account__row'>
        <li><Button text='избранное' isColored={false} to='favorites' /></li>
        <li><Button text='история' isColored={false} to='history' /></li>
        <li onClick={() => dispatch(returnToInitialState())}>
          <Button text='выйти' isColored={true} to='/' />
        </li>
      </ul>
    </nav>
  )
}

export { AccountInfo }