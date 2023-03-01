import './Button.scss';
interface ButtonProps {
  text: string
  isColored: boolean
}

const Button = ({ text, isColored }: ButtonProps) => {
  const colored = isColored ? 'button_colored' : '';

  return (
    <button className={`button ${colored}`}>
      {text}
    </button>
  )
}

export { Button }