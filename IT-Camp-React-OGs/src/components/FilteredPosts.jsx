import { useEffect, useState } from 'react';

const FilteredPosts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = posts.filter(
      post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [posts, search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Pretrazi postove..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredPosts.map(post => (
        <div key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FilteredPosts;
