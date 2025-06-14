import { useParams } from 'react-router-dom';
import { users } from '../data/users.js';

const SingleProfilePage = () => {
  const { id } = useParams();
  const user = users.find(user => user.id === parseInt(id));

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default SingleProfilePage;
