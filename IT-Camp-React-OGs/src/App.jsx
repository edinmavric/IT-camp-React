import { useState } from 'react';

const App = () => {
  // const [state, setState] = useState(0);

  // const handleMinus = () => {
  //   setState(prevState => prevState - 1);
  // };

  // const handlePlus = () => {
  //   setState(prevState => prevState + 1);
  // };

  // const [ime, setIme] = useState('');

  // const [stavka, setStavka] = useState([]);

  // const handleDodajStavku = () => {
  //   setStavka(prevStavka => [...prevStavka, `Stavka: ${stavka.length + 1}`]);
  // };

  // const [user, setUser] = useState({ name: '', email: '' });

  // function handleChangeName(event) {
  //   setUser(prevUsers => ({ ...prevUsers, name: event.target.value }));
  // }

  // function handleChangeEmail(event) {
  //   setUser(prevUsers => ({ ...prevUsers, email: event.target.value }));
  // }

  return (
    <div></div>

    // <div>
    //   <input
    //     type="text"
    //     placeholder="Ime"
    //     value={user.name}
    //     onChange={handleChangeName}
    //   />
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     value={user.email}
    //     onChange={handleChangeEmail}
    //   />

    //   <p>
    //     {user.name} - {user.email}
    //   </p>
    // </div>

    //  <div
    //   style={{
    //     display: 'flex',
    //     alignItems: 'center',
    //   }}
    // >
    //   <button onClick={handleMinus}>-</button>
    //   <p style={{ margin: '0' }}>{state}</p>
    //   <button onClick={handlePlus}>+</button>
    // </div>

    // <div>
    // <input
    //   type="text"
    //   placeholder="Eg. Marko"
    //   value={ime}
    //   onChange={event => setIme(event.target.value)}
    // />
    //   <p>Ime: {ime}</p>
    // </div>

    // <div>
    //   <button onClick={handleDodajStavku}>Dodaj</button>
    //   <ul>
    //     {stavka.map((stavka, index) => (
    //       <li key={index}>{stavka}</li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default App;
