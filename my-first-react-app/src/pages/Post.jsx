import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
  }, []);

  return (
    <div>
      <h1>{post ? post.title : 'Loading...'}</h1>
      <p>{post ? post.body : 'Loading...'}</p>
      <h2>Comments</h2>
      <div>
        {comments.map(comment => (
          <div key={comment.id}>
            <strong>{comment.name}</strong>: {comment.body}
          </div>
        ))}
      </div>
      <Link to={`/users/${post ? post.userId : ''}`}>Back to User</Link>
    </div>
  );
};

export default Post;
