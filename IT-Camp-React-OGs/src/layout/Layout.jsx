import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ margin: '12px 36px' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
