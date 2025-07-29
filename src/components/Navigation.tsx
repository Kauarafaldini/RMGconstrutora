import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const [dropdowns, setDropdowns] = useState({
    home: false,
    obras: false,
  });
  const location = useLocation();

  // Fechar dropdowns quando a rota mudar
  useEffect(() => {
    setDropdowns({ home: false, obras: false });
  }, [location.pathname]);

  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns((prev) => ({
      home: false,
      obras: false,
      [dropdown]: !prev[dropdown],
    }));
  };

  const closeDropdowns = () => {
    setDropdowns({ home: false, obras: false });
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`bg-black shadow-lg sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            <span className="text-white text-xl font-bold">RMG</span>
            <span className="text-primary-red text-xl font-bold">
              CONSTRUTORA
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Home Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("home")}
                className={`${
                  isActive("/")
                    ? "nav-link active"
                    : "nav-link"
                } flex items-center gap-1`}
              >
                Home
                <ChevronDown className="w-3 h-3" />
              </button>
              {dropdowns.home && (
                <div className="dropdown-menu">
                  <Link
                    to="/"
                    onClick={closeDropdowns}
                    className="dropdown-item"
                  >
                    Home
                  </Link>
                  <Link
                    to="/sobre-nos"
                    onClick={closeDropdowns}
                    className="dropdown-item"
                  >
                    Sobre Nós
                  </Link>
                </div>
              )}
            </div>

            {/* Obras Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("obras")}
                className={`${
                  isActive("/obra-empresarial") ||
                  isActive("/obra-corporativa") ||
                  isActive("/obra-residencial")
                    ? "nav-link active"
                    : "nav-link"
                } flex items-center gap-1`}
              >
                Obras
                <ChevronDown className="w-3 h-3" />
              </button>
              {dropdowns.obras && (
                <div className="dropdown-menu">
                  <Link
                    to="/obra-empresarial"
                    onClick={closeDropdowns}
                    className="dropdown-item"
                  >
                    Obra Empresarial
                  </Link>
                  <Link
                    to="/obra-corporativa"
                    onClick={closeDropdowns}
                    className="dropdown-item"
                  >
                    Obra Corporativa
                  </Link>
                  <Link
                    to="/obra-residencial"
                    onClick={closeDropdowns}
                    className="dropdown-item"
                  >
                    Obra Residencial
                  </Link>
                </div>
              )}
            </div>

            {/* Facilities */}
            <Link
              to="/facilities"
              className={`${
                isActive("/facilities")
                  ? "nav-link active"
                  : "nav-link"
              }`}
            >
              Facilities
            </Link>

            {/* Fale Conosco */}
            <Link
              to="/fale-conosco"
              className={`${
                isActive("/fale-conosco")
                  ? "nav-link active"
                  : "nav-link"
              }`}
            >
              Fale Conosco
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(dropdowns.home || dropdowns.obras) && (
        <div className="fixed inset-0 z-40" onClick={closeDropdowns}></div>
      )}
    </header>
  );
};

export default Navigation;
