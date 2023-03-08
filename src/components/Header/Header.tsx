import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';

import { AuthenticationButtons } from '../AuthenticationButtons';
import { AccountInfo } from '../AccountInfo';

import './Header.scss';

const Header = () => {
  const isLogged = useAppSelector((store) => store.userSlice.isLogged);
  const navigate = useNavigate();

  return (
    <header className='header'>

      <img
        className="header__logo"
        onClick={() => navigate('/')}
        src={`${__dirname}images/logo.png`}
        alt="logo"
      />

      {isLogged ? <AccountInfo /> : <AuthenticationButtons />}
    </header>
  )
}

export { Header }