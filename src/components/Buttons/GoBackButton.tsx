import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  return <button className='button go-back-button' onClick={() => navigate(-1)}>назад</button>;
};

export { GoBackButton };