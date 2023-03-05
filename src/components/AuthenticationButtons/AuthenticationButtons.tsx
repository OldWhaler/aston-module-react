import { Link } from 'react-router-dom';

import { Button } from '../Button';

import './AuthenticationButtons.scss';

const AuthenticationButtons = () => {
  return (
    <div className='authentication'>
      <Link to='registration'>
        <Button text='зарегистрироваться' isColored={false} />
      </Link>

      <Button text='войти' isColored={true} />
    </div>
  )
}

export { AuthenticationButtons }