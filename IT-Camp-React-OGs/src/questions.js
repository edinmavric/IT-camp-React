export const questions = [
  // useState
  {
    question: 'Koja je osnovna svrha useState hook-a u Reactu?',
    options: [
      'Da doda stil komponentama',
      'Da napravi navigaciju',
      'Da dodaje lokalno stanje u komponentu',
      'Da izvršava efekat kada se komponenta renderuje',
    ],
    correctIndex: 2,
  },
  {
    question: 'Šta vraća useState?',
    options: [
      'Funkciju za re-render',
      'Niz sa vrednošću i funkcijom za promenu',
      'Samo objekat sa podacima',
      'Promise',
    ],
    correctIndex: 1,
  },
  {
    question: 'Kako se koristi useState za brojanje klikova?',
    options: [
      'const [broj, setBroj] = useState()',
      'const broj = useState(0)',
      'const [broj, setBroj] = useState(0)',
      'useState(0, broj)',
    ],
    correctIndex: 2,
  },
  {
    question: 'Kako ažurirati stanje iz useState?',
    options: [
      'setState(broj + 1)',
      'broj = broj + 1',
      'setBroj(broj + 1)',
      'update(broj + 1)',
    ],
    correctIndex: 2,
  },
  {
    question: 'Da li useState radi u klasnim komponentama?',
    options: ['Da', 'Ne'],
    correctIndex: 1,
  },
  {
    question: 'Koliko puta možemo koristiti useState u komponenti?',
    options: ['Samo jednom', 'Koliko god želimo', 'Najviše 3 puta'],
    correctIndex: 1,
  },

  // useEffect
  {
    question: 'Kada se useEffect pokreće?',
    options: [
      'Samo kad kliknemo dugme',
      'Nakon svakog rendera',
      'Pre rendera',
      'Samo kad pozovemo useEffect ručno',
    ],
    correctIndex: 1,
  },
  {
    question: 'Čemu služi drugi argument useEffect-a?',
    options: [
      'Za dodavanje stilova',
      'Da navede zavisnosti',
      'Da izvrši setTimeout',
      'Za brisanje komponente',
    ],
    correctIndex: 1,
  },
  {
    question: 'Kako useEffect može imitirati componentDidMount?',
    options: [
      'Bez drugog argumenta',
      'Sa praznim nizom kao drugi argument',
      'Sa useMemo',
      'Ne može to',
    ],
    correctIndex: 1,
  },
  {
    question: 'Gde se obično koristi clean-up funkcija u useEffect-u?',
    options: [
      'Na početku funkcije',
      'Kao return funkcija iz useEffect-a',
      'U JSX kodu',
      'U useState-u',
    ],
    correctIndex: 1,
  },
  {
    question: 'Šta se dešava ako ne navedemo drugi argument useEffect-a?',
    options: [
      'Ne izvršava se nikada',
      'Izvršava se samo jednom',
      'Izvršava se pri svakom renderu',
    ],
    correctIndex: 2,
  },
  {
    question: 'Da li možemo imati više useEffect hook-ova u komponenti?',
    options: ['Ne', 'Da'],
    correctIndex: 1,
  },

  // useContext
  {
    question: 'Zašto koristimo useContext?',
    options: [
      'Za lokalnu navigaciju',
      'Za upravljanje stilovima',
      'Da izbegnemo props drilling',
      'Za animaciju komponenti',
    ],
    correctIndex: 2,
  },
  {
    question: 'Koja je uloga createContext?',
    options: [
      'Pravljenje komponente',
      'Kreiranje novog React hook-a',
      'Pravljenje Context objekta',
      'Korišćenje useRef-a',
    ],
    correctIndex: 2,
  },
  {
    question: 'Kako se koristi Provider iz konteksta?',
    options: [
      '<Provider value={vrednost}>...</Provider>',
      '<Provider={vrednost}>...</Provider>',
      'useProvider()',
      'createProvider()',
    ],
    correctIndex: 0,
  },
  {
    question: 'Gde moramo staviti Context.Provider?',
    options: [
      'U bilo kojoj funkciji',
      'Oko komponente kojoj želimo dati podatke',
      'Unutar useState',
      'U return JSX bez children',
    ],
    correctIndex: 1,
  },
  {
    question: 'Da li useContext radi bez Provider-a?',
    options: ['Da', 'Ne'],
    correctIndex: 1,
  },
  {
    question: 'Koji je ispravan način da uzmemo vrednost iz konteksta?',
    options: [
      'useContext()',
      'const ctx = useContext(MyContext)',
      'ctx = useContext()',
      'useContext.Provider()',
    ],
    correctIndex: 1,
  },

  // useParams
  {
    question: 'Šta vraća useParams?',
    options: [
      'Objekat sa parametrima iz URL-a',
      'Funkciju za navigaciju',
      'Broj renderovanja',
      'Boolean vrednost',
    ],
    correctIndex: 0,
  },
  {
    question: 'U kom paketu se nalazi useParams?',
    options: ['react', 'react-dom', 'react-router-dom', 'context-router'],
    correctIndex: 2,
  },
  {
    question: 'Kako pristupamo parametru "id" iz URL-a?',
    options: [
      'params.id',
      'useParams.id',
      'const { id } = useParams()',
      'router.id()',
    ],
    correctIndex: 2,
  },
  {
    question: 'Da bi koristili useParams, ruta mora sadržati:',
    options: ['/user/:id', '/user/id', '/user/?id=1', '/user=[id]'],
    correctIndex: 0,
  },

  // Router osnove
  {
    question: 'Koji element se koristi za definisanje putanja?',
    options: ['<Path>', '<Route>', '<Nav>', '<Switch>'],
    correctIndex: 1,
  },
  {
    question: 'Koji element omogućava navigaciju bez reload-a?',
    options: ['<a>', '<Link>', '<nav>', '<button>'],
    correctIndex: 1,
  },
  {
    question: 'Koji element obavija sve <Route> elemente?',
    options: ['<Routes>', '<Router>', '<BrowserRouter>', '<Switch>'],
    correctIndex: 2,
  },
  {
    question: 'Koji prop određuje na koju putanju se veže <Route>?',
    options: ['name', 'to', 'path', 'route'],
    correctIndex: 2,
  },

  // Osnove React komponenti
  {
    question: 'Šta je React komponenta?',
    options: [
      'HTML element',
      'JavaScript funkcija koja vraća JSX',
      'CSS fajl',
      'API poziv',
    ],
    correctIndex: 1,
  },
  {
    question: 'Kako se prosleđuju podaci komponentama?',
    options: ['state', 'props', 'context', 'return'],
    correctIndex: 1,
  },
  {
    question: 'Kako nazivamo funkcijske komponente u Reactu?',
    options: ['lowercase', 'snake_case', 'Veliko slovo', 'camelCase'],
    correctIndex: 2,
  },
  {
    question: 'Gde sme da stoji `return` u funkcijskoj komponenti?',
    options: [
      'Unutar JSX-a',
      'Na kraju fajla',
      'Unutar funkcije komponente',
      'Van komponente',
    ],
    correctIndex: 2,
  },
  {
    question: 'Koliko puta možemo koristiti komponente?',
    options: ['Samo jednom', 'Koliko god puta želimo'],
    correctIndex: 1,
  },
  {
    question: 'Šta znači JSX?',
    options: [
      'JavaScript + XML sintaksa',
      'JavaScript Extra',
      'JSON Extension',
      'JS Extended Syntax',
    ],
    correctIndex: 0,
  },
];
