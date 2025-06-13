const Label = ({ id, labelText }) => {
  return <label htmlFor={id}>{labelText || 'Default Label'}</label>;
};

const Input = ({ id, type, placeholder, label, labelTextInput }) => {
  return (
    <>
      {label && <Label id={id} labelText={labelTextInput} />}
      <input
        type={type || 'text'}
        placeholder={placeholder || 'Enter text here...'}
        id={id}
      />
    </>
  );
};

export default Input;
