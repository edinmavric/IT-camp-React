import { useState } from 'react';

const pitanja = [
  {
    tekst: '1. Šta vraća useState hook?',
    opcije: [
      'a) Samo stanje',
      'b) Samo setter funkciju',
      'c) Niz sa dva elementa: stanje i setter',
      'd) Objekat sa `value` i `setValue`',
    ],
    tacan: 'c',
  },
  {
    tekst: '2. Gde se poziva useEffect?',
    opcije: [
      'a) Unutar JSX-a',
      'b) Na vrhu komponente',
      'c) Unutar return',
      'd) Van komponente',
    ],
    tacan: 'b',
  },
  {
    tekst: '3. Kada se useEffect(() => {...}, []) poziva?',
    opcije: [
      'a) Nikad',
      'b) Na svaki re-render',
      'c) Samo jednom nakon prvog rendera',
      'd) Svakih 5 sekundi',
    ],
    tacan: 'c',
  },
  {
    tekst: '4. Kako čuvamo više stanja?',
    opcije: [
      'a) Koristimo više komponenata',
      'b) Koristimo useReducer',
      'c) Koristimo više useState poziva',
      'd) Ne možemo',
    ],
    tacan: 'c',
  },
  {
    tekst: '5. Šta se dešava ako izostavimo dependency array u useEffect?',
    opcije: [
      'a) Efekat se izvršava posle svakog rendera',
      'b) Efekat se nikada ne izvršava',
      'c) Dobijamo grešku',
      'd) Efekat se izvršava samo jednom',
    ],
    tacan: 'a',
  },
  {
    tekst: '6. Čemu služi setLoading(true)?',
    opcije: [
      'a) Označava da je fetch završen',
      'b) Pokreće komponentu iznova',
      'c) Označava da je fetch u toku',
      'd) Resetuje state',
    ],
    tacan: 'c',
  },
  {
    tekst: '7. Možemo li koristiti async direktno u useEffect?',
    opcije: [
      'a) Da, uvek',
      'b) Ne, ali možemo async funkciju unutar useEffect-a',
      'c) Zavisi od verzije Reacta',
      'd) Samo uz TypeScript',
    ],
    tacan: 'b',
  },
  {
    tekst: '8. Kako se čisti efekat u useEffect?',
    opcije: [
      'a) Korišćenjem clearTimeout()',
      'b) Vraćanjem cleanup funkcije iz useEffect',
      'c) Korišćenjem null efekta',
      'd) Ne može se čistiti',
    ],
    tacan: 'b',
  },
  {
    tekst: '9. Kada koristimo useEffect bez dependency array?',
    opcije: [
      'a) Nikad',
      'b) Kada želimo da se izvršava posle svakog rendera',
      'c) Samo kod forma',
      'd) Kada koristimo class komponente',
    ],
    tacan: 'b',
  },
  {
    tekst: '10. Koji izraz je tačan za kreiranje stanja?',
    opcije: [
      'a) const ime = useState("Marko")',
      'b) const [ime] = useState("Marko")',
      'c) const [ime, setIme] = useState("Marko")',
      'd) let ime = useState("Marko")',
    ],
    tacan: 'c',
  },
  {
    tekst: '11. Da li se useState može koristiti van React komponente?',
    opcije: [
      'a) Da',
      'b) Samo u custom hook-u',
      'c) Samo ako je importovan',
      'd) Ne, samo unutar React komponente',
    ],
    tacan: 'd',
  },
  {
    tekst: '12. Kako se koristi useEffect za fetch podatke?',
    opcije: [
      'a) Pozivamo fetch unutar return bloka',
      'b) Unutar useEffect definišemo async funkciju pa je pozovemo',
      'c) Direktno pozovemo async useEffect',
      'd) Koristimo useFetch umesto useEffect',
    ],
    tacan: 'b',
  },
  {
    tekst: '13. Kako možemo da renderujemo podatke tek kada su učitani?',
    opcije: [
      'a) Korišćenjem setTimeout',
      'b) Korišćenjem useEffect bez []',
      'c) Proverom loading state-a pre prikaza',
      'd) Nema potrebe, React to sam rešava',
    ],
    tacan: 'c',
  },
  {
    tekst: '14. Kako izgleda dependency array sa više vrednosti?',
    opcije: [
      'a) [ime || prezime]',
      'b) [ime && prezime]',
      'c) [ime, prezime]',
      'd) {ime, prezime}',
    ],
    tacan: 'c',
  },
  {
    tekst: '15. Kada koristimo cleanup funkciju u useEffect?',
    opcije: [
      'a) Kada želimo da fetch podatke',
      'b) Kada komponenta bude demontirana ili efekat ponovo pokrenut',
      'c) Samo kod input polja',
      'd) Kada resetujemo stanje',
    ],
    tacan: 'b',
  },
];

const App = () => {
  const [vidljivi, setVidljivi] = useState(Array(pitanja.length).fill(false));

  const prikaziTacan = i => {
    const novo = [...vidljivi];
    novo[i] = !novo[i];
    setVidljivi(novo);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>🧠 Kviz – `useState` i `useEffect` (15 pitanja)</h2>
      {pitanja.map((pitanje, i) => (
        <div key={i} style={{ marginBottom: '2rem' }}>
          <p>
            <strong>{pitanje.tekst}</strong>
          </p>
          <ul>
            {pitanje.opcije.map((opcija, idx) => (
              <li key={idx}>{opcija}</li>
            ))}
          </ul>
          <button
            onClick={() => prikaziTacan(i)}
            style={{ marginTop: '0.5rem' }}
          >
            {vidljivi[i] ? 'Sakrij tačan odgovor' : 'Prikaži tačan odgovor'}
          </button>
          {vidljivi[i] && (
            <p style={{ color: 'green', marginTop: '0.5rem' }}>
              ✅ Tačan odgovor: <strong>{pitanje.tacan})</strong>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
