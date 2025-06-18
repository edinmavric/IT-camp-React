import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link style={{ marginRight: '12px' }} to="/">
        Home
      </Link>
      <Link to="/second">Second</Link>
    </header>
  );
};

export default Header;
