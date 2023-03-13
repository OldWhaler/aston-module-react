import { Link } from 'react-router-dom';

import './Buttons.scss';
interface ButtonProps {
  text: string
  colored: boolean
  to: string
}

const Button = ({ text, colored, to }: ButtonProps) => {
  const classNameString = `button ${colored ? 'button_colored' : ''}`;

  return <Link to={to} className={classNameString}>{text}</ Link>;
};

export { Button };