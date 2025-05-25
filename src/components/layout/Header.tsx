import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'Портфолио', path: '/portfolio' },
    { name: 'Отзывы', path: '/reviews' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-pink-500" />
            <span className="text-xl font-semibold text-gray-900">Beauty Master</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? 'text-pink-500 font-medium'
                    : 'text-gray-600 hover:text-pink-500'
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
            >
              Записаться
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 ${
                  isActive(item.path)
                    ? 'text-pink-500 font-medium'
                    : 'text-gray-600 hover:text-pink-500'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="block bg-pink-500 text-white px-6 py-2 rounded-full text-center hover:bg-pink-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Записаться
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;