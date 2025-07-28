import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user details:', error));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User ID: {userId}</h1>
      <div>
        <h2>{user.name}</h2>
        <p>Username: {user.username}</p>
        <p>
          Address: {user.address.street}, {user.address.city}
        </p>
        <p>Zip Code: {user.address.zipcode}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Company: {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserDetail;
