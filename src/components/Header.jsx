import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";

const Header = () => {

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const storedEmail = localStorage.getItem('userEmail');
      setIsLoggedIn(!!storedEmail);
      setUserEmail(storedEmail || '');
    };

    checkLogin();
    window.addEventListener('storage', checkLogin);
    return () => window.removeEventListener('storage', checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setUserEmail('');
    window.dispatchEvent(new Event('storage'));
    navigate('/');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem('userEmail', email);
      setIsLoggedIn(true);
      setUserEmail(email);
      setShowLogin(false);
      setEmail('');
      setPassword('');
      window.dispatchEvent(new Event('storage'));
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="w-full shadow-md bg-white">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
          🎯 Fitlife
        </h1>


        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 lg:gap-14 font-semibold">

          <Link to="/">
            <button className="hover:scale-110 transition">
              Home
            </button>
          </Link>

          <Link to="/services">
            <button className="hover:scale-110 transition">
              Services
            </button>
          </Link>

          <Link to="/Price">
            <button className="hover:scale-110 transition">
              Pricing
            </button>
          </Link>

        </div>


        {/* Desktop Login */}
        <div className="hidden md:block">

          {!isLoggedIn ? (
            <button
              onClick={() => setShowLogin(true)}
              className="text-blue-500 hover:text-white hover:bg-blue-500 px-4 py-2 rounded-lg border border-blue-500 transition hover:scale-105"
            >
              Login Now
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded-lg border border-red-500 transition hover:scale-105"
            >
              Logout ({userEmail})
            </button>
          )}

        </div>


        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30}/> : <Menu size={30}/>}
        </div>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden flex flex-col items-center gap-6 pb-6 font-semibold border-t">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link to="/Price" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>


          {!isLoggedIn ? (
            <button
              onClick={() => {
                setShowLogin(true);
                setMenuOpen(false);
              }}
              className="text-blue-500 border border-blue-500 px-4 py-2 rounded-lg"
            >
              Login Now
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-500 border border-red-500 px-4 py-2 rounded-lg"
            >
              Logout ({userEmail})
            </button>
          )}

        </div>

      )}



      {/* Login Popup */}
      {showLogin && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-10 px-4">

          <form
            onSubmit={handleLogin}
            className="bg-white p-6 rounded-lg space-y-4 w-full max-w-sm shadow-lg"
          >

            <h2 className="text-xl font-bold text-center">
              Login
            </h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full rounded"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full rounded"
            />

            <button className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600">
              Login
            </button>

            <button
              type="button"
              onClick={() => setShowLogin(false)}
              className="text-red-500 w-full"
            >
              Cancel
            </button>

          </form>

        </div>
      )}

    </div>
  );
};

export default Header;