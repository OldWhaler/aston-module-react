import { GoBackButton } from '../Buttons';

import './ErrorMessageForRequest.scss';

const ErrorMessageForRequest = ({ message }: { message: string }) => {
  return (
    <div className='error-message'>
      <GoBackButton />
      <h2 className='error-message__text'>{message}</h2>
    </div>
  );
};

export { ErrorMessageForRequest };