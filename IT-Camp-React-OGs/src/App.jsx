import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState(null);
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/?username=${username}`
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [username]);

  return (
    <div>
      <input
        type="text"
        placeholder="Unesite postojeci username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      {isLoading ? (
        <p>Ucitavanje...</p>
      ) : isError ? (
        <p>Greska!</p>
      ) : (
        <div>
          {users.map(user => (
            <p>{user.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
