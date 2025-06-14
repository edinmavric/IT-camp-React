import { useTheme } from '../context/ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    </button>
  );
};

export default ThemeButton;
