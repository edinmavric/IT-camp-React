import { useState } from 'react';
import { api } from './Api';

const AxiosPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    api
      .post('/posts', {
        title,
        body,
        userId: 1,
      })
      .then(res => console.log(res.data))
      .catch(err => console.error(err));

    setTitle('');
    setBody('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Dodaj Post</h1>
        <input
          type="text"
          placeholder="Naslov"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Sadržaj"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <button type="submit">Dodaj</button>
      </form>
    </>
  );
};

export default AxiosPost;
