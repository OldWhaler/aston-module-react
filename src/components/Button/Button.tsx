import { ButtonProps } from '../../Types/types';
import './Button.scss'

const Button = ({ text, isColored }: ButtonProps) => {
  const colored = isColored ? 'button_colored' : '';


  return (
    <button className={`button ${colored}`}>
      {text}
    </button>
  )
}

export { Button }