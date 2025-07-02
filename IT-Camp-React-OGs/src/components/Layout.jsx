import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/students">Students</Link> |{' '}
          <Link to="/courses">Courses</Link> | <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy;2025 Studentski Portal</p>
      </footer>
    </div>
  );
}
