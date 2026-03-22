// Layout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={isHomePage ? 'bg-gradient-to-br from-blue-500 via-blue-300 to-blue-200' : ''}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;