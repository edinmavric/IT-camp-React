type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick}>{label}</button>
);

export default Button;