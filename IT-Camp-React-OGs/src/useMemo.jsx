import { useEffect, useMemo, useState } from 'react';

// Koristi se kada imamo skupe operacije koje treba da se 
// izvrše i kada želimo da ih keširamo

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  useEffect(() => {
    console.log('Theme changed!');
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark(prevDark => !prevDark)}>
        Change Theme
      </button>

      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
