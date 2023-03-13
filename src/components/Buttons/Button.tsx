import { Link } from 'react-router-dom';

import './Buttons.scss';
interface ButtonProps {
  text: string
  isColored: boolean
  to: string
}

const Button = ({ text, isColored, to }: ButtonProps) => {
  const colored = isColored ? 'button_colored' : '';

  return <Link to={to} className={`button ${colored}`}>{text}</ Link>;
};

export { Button };