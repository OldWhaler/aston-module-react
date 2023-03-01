import { useNavigate } from 'react-router-dom';

import { AuthenticationButtons } from '../AuthenticationButtons';
import { AccountInfo } from '../AccountInfo';

import './Header.scss'

const Header = () => {

  const isLogged = false; //Заглушка регистрации

  const navigate = useNavigate();

  return (
    <header className='header'>

      <img
        className="header__logo"
        onClick={() => navigate('/')}
        src={`${__dirname}images/logo.webp`}
        alt="logo"
      />

      {isLogged ? <AccountInfo /> : <AuthenticationButtons />}
    </header>
  )
}

export { Header }