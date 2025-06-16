import Card from './components/Card';

function App() {
  const nekiNiz = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Alice Johnson', age: 28 },
    { id: 4, name: 'Bob Brown', age: 35 },
  ];

  const users = [
    {
      id: 1,
      name: 'Ana Petrović',
      age: 24,
      email: 'ana.p@example.com',
      isActive: true,
    },
    {
      id: 2,
      name: 'Marko Jovanović',
      age: 30,
      email: 'marko.j@example.com',
      isActive: false,
    },
    {
      id: 3,
      name: 'Ivana Nikolić',
      age: 28,
      email: 'ivana.n@example.com',
      isActive: true,
    },
    {
      id: 4,
      name: 'Luka Savić',
      age: 22,
      email: 'luka.s@example.com',
      isActive: false,
    },
    {
      id: 5,
      name: 'Milica Stojanović',
      age: 26,
      email: 'milica.s@example.com',
      isActive: true,
    },
  ];

  return (
    <div>
      {nekiNiz.map((objekatIzNiza, indexDoKojegSmoStigli) => (
        <div key={objekatIzNiza.id}>
          <h2>{objekatIzNiza.name}</h2>
          <p>Age: {objekatIzNiza.age}</p>
          <p>Index: {indexDoKojegSmoStigli}</p>
        </div>
      ))}

      <ul>
        <h1>1. Lista Imena svih korisnika</h1>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h1>2. Aktivni korisnici</h1>
      {users
        .filter(user => user.isActive)
        .map(user => (
          <p key={user.id}>{user.name} je Aktivan</p>
        ))}

      <h1>3. Kartice svih korsnika</h1>
      {users.map(user => (
        <Card user={user} />
      ))}
    </div>
  );
}

export default App;
