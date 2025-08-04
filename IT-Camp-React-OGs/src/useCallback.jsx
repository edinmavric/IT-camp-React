import { useCallback, useState } from 'react';
import List from './List';

// Koristi se samo kada prosledjujemo funkcije kao props
// i kada je ta funkcija u nizu zavisnosti useEffect-a

export const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incr = 0) => {
      return [number + incr, number + 1 + incr, number + 2 + incr];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle theme
      </button>

      <List getItems={getItems} />
    </div>
  );
};
