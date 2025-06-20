import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <main style={{ margin: '12px 36px' }}>
        <Outlet /> {/* Isto kao children */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
