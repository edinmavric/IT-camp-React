const Card = ({ user }) => {
  return (
    <div
      style={{ border: '1px solid white', padding: '10px', margin: '10px' }}
      key={user.id}
    >
      <h2>{user.name}</h2>
      <p>{user.age}</p>
      <p>{user.email}</p>
      <p>{user.isActive ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default Card;
