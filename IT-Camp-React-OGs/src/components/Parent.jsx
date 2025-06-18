const Parent = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Ja sam direktno u komponenti!</h1>
      {children}
    </div>
  );
};

export default Parent;
