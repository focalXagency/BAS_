import './Button.css';

const Button = ({title}) => {
  return (
    <button className="submit" type="submit">
      {title}
    </button>
  )
}

export default Button
