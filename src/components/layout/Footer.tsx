import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-pink-400" />
              <span className="text-xl font-semibold">Beauty Master</span>
            </Link>
            <p className="text-gray-400">
              Профессиональный уход за вашей красотой. Маникюр, макияж и визаж в Москве.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Обо мне
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Маникюр</li>
              <li className="text-gray-400">Педикюр</li>
              <li className="text-gray-400">Наращивание ногтей</li>
              <li className="text-gray-400">Дневной макияж</li>
              <li className="text-gray-400">Вечерний макияж</li>
              <li className="text-gray-400">Свадебный образ</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-pink-400" />
                <a href="tel:+79991234567" className="text-gray-400 hover:text-pink-400 transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-pink-400" />
                <a href="mailto:info@beautymaster.ru" className="text-gray-400 hover:text-pink-400 transition-colors">
                  info@beautymaster.ru
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-pink-400" />
                <span className="text-gray-400">Москва, ул. Красоты, д. 1</span>
              </li>
              <li className="flex items-center space-x-4 mt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Facebook size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Beauty Master. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;