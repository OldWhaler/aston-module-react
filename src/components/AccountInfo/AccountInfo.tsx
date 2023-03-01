import { Button } from '../Button';

import './AccountInfo.scss'

const AccountInfo = () => {

  const buttonTexts = {
    favorites: 'избранное',
    history: 'история',
    signout: 'выйти'
  }

  return (
    <div className='account'>
      <p className='account__name'>имя учетной записи</p>
      <Button text={buttonTexts.favorites} isColored={false} />
      <Button text={buttonTexts.history} isColored={false} />
      <Button text={buttonTexts.signout} isColored={true} />
    </div>
  )
}

export { AccountInfo }