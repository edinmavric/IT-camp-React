import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// 1. Napraviti UserContext za cuvanje imena i funkcije
// za promenu imena korisnika
// 2. Prikaze ime korisnika u Profile komponenti
// 3. U komponenti Login omoguciti promenu imena korisnika
