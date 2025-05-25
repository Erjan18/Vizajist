import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Shield, Award } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Профессиональный маникюр и макияж в Москве
            </h1>
            <p className="text-xl mb-8">
              Создаю красоту и уверенность для каждой клиентки. 
              Индивидуальный подход, premium-материалы и многолетний опыт.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors"
              >
                Записаться
              </Link>
              <Link
                to="/portfolio"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
              >
                Портфолио
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Качество</h3>
              <p className="text-gray-600">
                Использую только профессиональные материалы премиум-класса
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Пунктуальность</h3>
              <p className="text-gray-600">
                Ценю ваше время и всегда соблюдаю график записи
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Безопасность</h3>
              <p className="text-gray-600">
                Стерильные инструменты и одноразовые материалы
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Опыт</h3>
              <p className="text-gray-600">
                Более 5 лет практики и постоянное обучение
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Маникюр"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Маникюр</h3>
                <p className="text-gray-600 mb-4">
                  Классический и аппаратный маникюр, дизайн любой сложности
                </p>
                <Link
                  to="/services"
                  className="text-pink-500 font-medium hover:text-pink-600"
                >
                  Подробнее →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Макияж"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Макияж</h3>
                <p className="text-gray-600 mb-4">
                  Дневной, вечерний и свадебный макияж
                </p>
                <Link
                  to="/services"
                  className="text-pink-500 font-medium hover:text-pink-600"
                >
                  Подробнее →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3997383/pexels-photo-3997383.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Наращивание"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Наращивание</h3>
                <p className="text-gray-600 mb-4">
                  Наращивание и коррекция ногтей
                </p>
                <Link
                  to="/services"
                  className="text-pink-500 font-medium hover:text-pink-600"
                >
                  Подробнее →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна",
                photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
                text: "Лучший мастер маникюра, у которого я была! Очень аккуратная работа и приятная атмосфера.",
                date: "15.02.2024"
              },
              {
                name: "Екатерина",
                photo: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=100",
                text: "Делала свадебный макияж. Результат превзошел все ожидания! Макияж держался весь день.",
                date: "10.02.2024"
              },
              {
                name: "Мария",
                photo: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=100",
                text: "Регулярно хожу на маникюр. Всегда внимательное отношение и отличный результат.",
                date: "05.02.2024"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/reviews"
              className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors"
            >
              Все отзывы
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готовы преобразиться?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Запишитесь на консультацию прямо сейчас и получите скидку 10% на первое посещение
          </p>
          <Link
            to="/booking"
            className="inline-block bg-white text-pink-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Записаться на приём
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;