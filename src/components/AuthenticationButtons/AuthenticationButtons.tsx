import { Button } from '../Button';

import './AuthenticationButtons.scss';

const AuthenticationButtons = () => {
  return (
    <div className='authentication'>
      <Button text='зарегистрироваться' isColored={false} to='/registration' />
      <Button text='войти' isColored={true} to='/login' />
    </div>
  );
};

export { AuthenticationButtons };