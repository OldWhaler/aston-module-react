import { Button } from '../Button';

import './AuthenticationButtons.scss';

const AuthenticationButtons = () => {

  const buttonTexts = {
    signin: 'войти',
    registration: 'зарегистрироваться'
  }

  return (
    <div className='authentication'>
      <Button text={buttonTexts.registration} isColored={false} />
      <Button text={buttonTexts.signin} isColored={true} />
    </div>
  )
}

export { AuthenticationButtons }