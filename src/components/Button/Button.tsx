import { Link } from 'react-router-dom';

import './Button.scss';
interface ButtonProps {
  text: string
  isColored: boolean
  to: string
  clickHandler?: () => void
}

const Button = ({ text, isColored, clickHandler, to }: ButtonProps) => {
  const colored = isColored ? 'button_colored' : '';

  return (
    <Link to={to} className={`button ${colored}`} onClick={clickHandler}>
      {text}
    </ Link>
  )
}

export { Button }