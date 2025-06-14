import { users } from '..data/users.js';
import { Link } from 'react-router-dom';

const ProfilesPage = () => {
  return (
    <>
      {users.map(user => (
        <Link to={`/${user.id}`} key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </Link>
      ))}
    </>
  );
};

export default ProfilesPage;
