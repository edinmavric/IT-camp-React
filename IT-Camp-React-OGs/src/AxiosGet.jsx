import { useEffect, useState } from 'react';
import { api } from './Api';

const AxiosGet = ({ refresh }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(data => setPosts(data))
    //   .catch(error => console.error('Error fetching data:', error));

    api
      .get('/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [refresh]);

  const handleDelete = id => {
    api
      .delete(`/posts/${id}`)
      .then(() => setPosts(posts.filter(post => post.id !== id)))
      .catch(() => alert('Greška pri brisanju.'));
  };

  return (
    <>
      <h1>Postovi</h1>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Obrisi post</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AxiosGet;
