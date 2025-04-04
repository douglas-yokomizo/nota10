import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-secondary text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-primary text-2xl font-bold">NOTA</span>
          <span className="text-white text-2xl font-bold">10</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="hover:text-primary transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-primary transition-colors"
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:text-primary transition-colors"
              >
                Perfil
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login/Register Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="text-white hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors"
          >
            Cadastre-se
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary-dark py-4">
          <div className="container mx-auto px-4">
            <nav className="mb-4">
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link
                    to="/"
                    className="block hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="block hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="block hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="block hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Perfil
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col space-y-3">
              <Link
                to="/login"
                className="block text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
