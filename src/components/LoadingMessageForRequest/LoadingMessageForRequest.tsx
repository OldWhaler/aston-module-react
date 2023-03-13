import './LoadingMessageForRequest.scss';

const LoadingMessageForRequest = ({ message }: { message: string }) => {
  return <h2 className='loading-message'>{message}</h2>;
};

export { LoadingMessageForRequest };