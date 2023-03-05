import './Button.scss';
interface ButtonProps {
  text: string
  isColored: boolean
  clickHandler?: () => void
}

const Button = ({ text, isColored, clickHandler }: ButtonProps) => {
  const colored = isColored ? 'button_colored' : '';

  return (
    <button className={`button ${colored}`} onClick={clickHandler}>
      {text}
    </button >
  )
}

export { Button }