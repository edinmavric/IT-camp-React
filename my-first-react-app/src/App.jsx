import { Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import User from './pages/User';
import Post from './pages/Post';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/users/:userId" element={<User />} />
      <Route path="/posts/:postId" element={<Post />} />
    </Routes>
  );
}

export default App;
