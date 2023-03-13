import { useNavigate } from 'react-router-dom';

import './GoBackButton.scss';

const GoBackButton = () => {
  const navigate = useNavigate();

  return <button className='button' onClick={() => navigate(-1)}>назад</button>;
};

export { GoBackButton };