import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilesPage from './pages/ProfilesPage';
import SingleProfilePage from './pages/SingleProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfilesPage />} />
        <Route path="/:id" element={<SingleProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
