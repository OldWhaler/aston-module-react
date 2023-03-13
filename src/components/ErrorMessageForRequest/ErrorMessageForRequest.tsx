import { GoBackButton } from '../Buttons';

import './ErrorMessageForRequest.scss';

const ErrorMessageForRequest = ({ message }: { message: string }) => {
  return (
    <div className='error'>
      <GoBackButton />
      <h2 className='error__message'>{message}</h2>
    </div>
  );
};

export { ErrorMessageForRequest };