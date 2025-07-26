import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Korisnici</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {users.map(user => (
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
