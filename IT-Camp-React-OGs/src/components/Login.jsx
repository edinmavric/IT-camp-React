import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const { setUserName } = useContext(UserContext);
  const [inputValue, setInputValue] = useState('');

  const handleLogin = () => {
    if (inputValue.trim() !== '') {
      setUserName(inputValue.trim());
      setInputValue('');
    } else {
      alert('Molimo unesite ispravno ime korisnika.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Unesite ime"
      />
      <button onClick={handleLogin}>Prijavi se</button>
    </div>
  );
};

export default Login;
