const Button = ({ textContent, type, className }) => {
  return (
    <button className={`btn ${className}`} type={type}>
      {textContent}
    </button>
  );
};

export default Button;
