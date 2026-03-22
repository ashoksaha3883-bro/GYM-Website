import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import HomePage from './components/Home';
import ServicePage from './components/Service';
import Prices from './components/Priceing';
import Logi from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';

// Layout component defined inline (replaces separate Layout.jsx)
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="Price" element={<Prices />} />
          <Route path="Log" element={<Logi />} />
          {/* <Route path="Foo" element={<Footer />} /> */}
        </Route> 
    
           </Routes>
               <Footer />
    </BrowserRouter>
  );
}

export default App;