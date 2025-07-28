// /users/7
// /products/shoes/45 - ovo su parametri!
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/products/:category/:productId" element={<div>Product Detail</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
