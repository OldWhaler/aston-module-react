import { Button } from '../Button';

import './AuthenticationButtons.scss';

const AuthenticationButtons = () => {
  return (
    <div className='authentication'>
      <Button text='зарегистрироваться' isColored={false} />
      <Button text='войти' isColored={true} />
    </div>
  )
}

export { AuthenticationButtons }