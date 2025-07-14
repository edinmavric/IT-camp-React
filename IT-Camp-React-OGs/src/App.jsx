import { useEffect, useState } from 'react';

const App = () => {
  // 1. ------- const [data, setData] = useState([]);
  // const [type, setType] = useState('posts');

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then(res => res.json())
  //     .then(data => setData(data));
  // }, [type]); ------- 1.

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //       const json = await res.json();
  //       setUsers(json);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchUsers();
  // }, []); ----- 1.

  // 2. Ako input ima vise od 10 karaktera,
  // izbaciti tekst "Prekoracili ste maksimalan broj teksta"

  // const [text, setText] = useState('');
  // const [warning, setWarning] = useState('');

  // 2. ------- useEffect(() => {
  //   if (text.length > 10) {
  //     setWarning('Prekoracili ste maksimalan broj teksta');
  //   } else {
  //     setWarning('');
  //   }
  // }, [text]); ------- 2.

  // 3.
  // const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  // 3.

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>{innerWidth}px</p>
      {/* 3. <p>{time.toLocaleString()}</p> */}
      {/* 2. ------- <input
        type="text"
        placeholder="Unesite tekst"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <p>Duzina teksta: {text.length}</p>
      {warning && <p style={{ color: 'red' }}>{warning}</p>} ------- 2. */}
      {/* 1. ------- <button onClick={() => setType('posts')}>Posts</button>
      <button onClick={() => setType('users')}>Users</button>

      {data.length &&
        data.map(item => (
          <div
            style={{ marginBottom: '10px', borderBottom: '1px solid black' }}
          >
            {item.title || item.name}
          </div>
        ))} ------- 1. */}
    </div>
  );
};

export default App;
