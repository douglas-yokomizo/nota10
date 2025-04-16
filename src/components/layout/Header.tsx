import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

import { MdMenu, MdClose, MdExitToApp } from "react-icons/md";

import logo from "../../assets/logo.svg";
import SideMenu from "./SideMenu";

export function Header() {
  const { isAuthenticated, logout, user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="bg-[#141414] shadow-md relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 md:h-12 lg:h-14 w-auto" />
        </div>
        <div className="flex items-center space-x-4">
          {user && (
            <div className="text-white text-sm hidden md:block">
              {user.name}
            </div>
          )}
          <button
            className="text-gray-400 hover:text-white"
            onClick={handleLogout}
            title="Sair"
          >
            <MdExitToApp className="h-6 w-6" />
          </button>
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <MdMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Side Menu */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
