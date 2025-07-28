import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

[
  { id: 1, name: 'Product 1', category: 'shoes' },
  { id: 2, name: 'Product 2', category: 'clothes' },
  { id: 3, name: 'Product 3', category: 'accessories' },
];

// const { category = 'shoes', productId = 1 } = useParams();

// /products/shoes/1
// /products/clothes/2
// /products/accessories/3

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {users.map(user => (
        <Link to={`/users/${user.id}`} key={user.id}>
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default UserList;
