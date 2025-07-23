import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header className={theme}>
      <h1>Header</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
      <p>Current theme: {theme}</p>
    </header>
  );
};

export default Header;
