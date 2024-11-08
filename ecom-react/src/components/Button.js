const Button = ({ onClickHandler, value, title, className }) => {
  return (
    <button onClick={() => onClickHandler(value)} className={className}>
      {title}
    </button>
  );
};

export default Button;
