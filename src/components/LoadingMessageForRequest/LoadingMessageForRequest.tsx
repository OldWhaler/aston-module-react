import './LoadingMessageForRequest.scss';

const LoadingMessageForRequest = ({ message }: { message: string }) => {
  return <h2 className='loading-message'>Данные загружаются...</h2>;
};

export { LoadingMessageForRequest };