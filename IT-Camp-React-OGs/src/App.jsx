import { useState } from 'react';

const App = () => {
  // 2. ---
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  const handleAddUser = userType => {
    if (name.trim()) {
      const newUser = { id: Date.now(), name: name.trim(), type: userType };
      setUsers(prevUsers => [newUser, ...prevUsers]);
      setName('');
    }
  };

  const handleRemoveUser = id => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };
  // --- .2
  // 1. ---
  // const [ime, setIme] = useState('');
  // const [prezime, setPrezime] = useState('');
  // const [email, setEmail] = useState('');
  // const [sifra, setSifra] = useState('');

  // const handleDelete = () => {
  //   setIme('');
  //   setPrezime('');
  //   setEmail('');
  //   setSifra('');
  // };
  // --- .1

  // Imati Boolean state, na klik dugmeta napraviti toggle, prikazi
  // i sakrij karticu
  // const [prikazi, setPrikazi] = useState(false);

  return (
    <div>
      <input
        type="text"
        placeholder="Unesite Ime korisnika"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => handleAddUser('user')}>Dodaj korisnika</button>
      <button onClick={() => handleAddUser('admin')}>Dodaj admina</button>

      <ul>
        {users.map((user, index) => (
          <li key={user.id * index}>
            {user.type === 'admin' ? (
              <strong>
                {user.name} - ({user.type})
              </strong>
            ) : (
              <span>
                {user.name} - ({user.type})
              </span>
            )}{' '}
            <button onClick={() => handleRemoveUser(user.id)}>
              Obrisi Korisnika
            </button>
          </li>
        ))}
      </ul>
    </div>
    //  <button onClick={() => setPrikazi(prev => !prev)}>
    //   {prikazi ? 'Sakrij' : 'Prikazi'} detalje
    // </button>
    // {prikazi && (
    //   <div style={{ marginTop: '12px', border: '1px solid grey' }}>
    //     Neki detalji prikazani
    //   </div>
  );
  {
    /* 1. <form>
    <input
      type="text"
      placeholder="Ime"
      value={ime}
      onChange={e => setIme(e.target.value)}
    />
    <input
      type="text"
      placeholder="Prezime"
      value={prezime}
      onChange={e => setPrezime(e.target.value)}
    />
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={e => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Sifra"
      value={sifra}
      onChange={e => setSifra(e.target.value)}
    />

    <button onClick={handleDelete}>Izbrisi</button>
  </form>

  <div style={{ border: '1px solid gray', padding: '12px' }}>
    <h3>Uneti podaci:</h3>
    <p>
      <strong>Ime:</strong> {ime}
    </p>
    <p>
      <strong>Prezime:</strong> {prezime}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Sifra:</strong> {sifra}
    </p>
  </div> */
  }
};

export default App;
