import Button from './Button';

const Form = ({ title, ...inputs }) => {
  return (
    <form>
      <h2>{title}</h2>
      {...inputs}
      <Button type="submit" textContent="Submit Form" />
    </form>
  );
};

export default Form;
