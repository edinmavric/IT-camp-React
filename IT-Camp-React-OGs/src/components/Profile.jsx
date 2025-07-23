import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { userName } = useContext(UserContext);

  return (
    <div>
      <p>
        Trenutni korisnik se zove: <strong>{userName}</strong>
      </p>
    </div>
  );
};

export default Profile;
