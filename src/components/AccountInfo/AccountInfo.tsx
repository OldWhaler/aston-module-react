import { Button } from '../Button';

import './AccountInfo.scss'

const AccountInfo = () => {
  return (
    <div className='account'>
      <p className='account__name'>имя учетной записи</p>
      <Button text='избранное' isColored={false} />
      <Button text='история' isColored={false} />
      <Button text='выйти' isColored={true} />
    </div>
  )
}

export { AccountInfo }