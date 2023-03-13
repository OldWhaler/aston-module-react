import './ErrorMessageForRequest.scss';

const ErrorMessageForRequest = ({ message }: { message: string }) => {
  return <h2 className='error-message'>{message}</h2>;
};

export { ErrorMessageForRequest };