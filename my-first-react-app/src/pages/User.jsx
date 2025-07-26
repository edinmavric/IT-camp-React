import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, [userId]);

  return <div>
    <h1>{user ? user.name : 'Loading...'}</h1>
    <p>Email: {user ? user.email : 'Loading...'}</p>
    <h2>Posts</h2>
    <div>
      {posts.map(post => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </Link>
      ))}
    </div>
  </div>;
};

export default User;
