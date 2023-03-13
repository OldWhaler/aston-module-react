import { Button } from '../Buttons';

import './AuthenticationButtons.scss';

const AuthenticationButtons = () => {
  return (
    <div className='authentication'>
      <Button text='зарегистрироваться' colored={false} to='/registration' />
      <Button text='войти' colored={true} to='/login' />
    </div>
  );
};

export { AuthenticationButtons };