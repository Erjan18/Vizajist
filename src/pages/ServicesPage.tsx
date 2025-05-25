import React from 'react';
import { Clock, Sparkles, Scissors, Magnet as Magic, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Маникюр',
      icon: Scissors,
      services: [
        { name: 'Классический маникюр', price: '1200 сом', duration: '60 мин' },
        { name: 'Аппаратный маникюр', price: '1500 сом', duration: '90 мин' },
        { name: 'Комбинированный маникюр', price: '1400 сом', duration: '75 мин' },
        { name: 'Покрытие гель-лак', price: '800 сом', duration: '40 мин' },
        { name: 'Дизайн ногтей (1 ноготь)', price: 'от 100 сом', duration: '10-20 мин' },
      ],
      description: 'Профессиональный уход за вашими руками с использованием премиальных материалов и стерильных инструментов.'
    },
    {
      id: 2,
      title: 'Наращивание ногтей',
      icon: Magic,
      services: [
        { name: 'Наращивание гелем', price: '2500 сом', duration: '120 мин' },
        { name: 'Коррекция нарощенных ногтей', price: '2000 сом', duration: '90 мин' },
        { name: 'Снятие нарощенных ногтей', price: '500 сом', duration: '40 мин' },
        { name: 'Укрепление ногтей', price: '1000 сом', duration: '60 мин' },
      ],
      description: 'Создание идеальной формы и длины ногтей с помощью современных технологий и качественных материалов.'
    },
    {
      id: 3,
      title: 'Макияж',
      icon: Sparkles,
      services: [
        { name: 'Дневной макияж', price: '2000 сом', duration: '60 мин' },
        { name: 'Вечерний макияж', price: '3000 сом', duration: '90 мин' },
        { name: 'Свадебный макияж', price: '5000 сом', duration: '120 мин' },
        { name: 'Макияж для фотосессии', price: '3500 сом', duration: '90 мин' },
      ],
      description: 'Профессиональный макияж для любого случая с учетом ваших пожеланий и особенностей внешности.'
    },
    {
      id: 4,
      title: 'Свадебный образ',
      icon: Heart,
      services: [
        { name: 'Свадебный макияж + укладка', price: '7000 сом', duration: '180 мин' },
        { name: 'Репетиция свадебного образа', price: '3000 сом', duration: '120 мин' },
        { name: 'Макияж для гостей', price: '2500 сом', duration: '60 мин' },
        { name: 'Свадебный маникюр', price: '2000 сом', duration: '90 мин' },
      ],
      description: 'Создание идеального свадебного образа, который останется неизменным в течение всего торжества.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Услуги и цены</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center mb-4">
                <service.icon className="w-6 h-6 text-pink-500 mr-3" />
                <h2 className="text-xl font-semibold">{service.title}</h2>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>

            <div className="p-6">
              {service.services.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                >
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock size={14} className="mr-1" />
                      {item.duration}
                    </div>
                  </div>
                  <span className="font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-pink-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Готовы преобразиться?</h2>
        <p className="text-gray-600 mb-6">
          Запишитесь на консультацию, и мы подберем идеальные услуги именно для вас
        </p>
        <Link
          to="/booking"
          className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors"
        >
          Записаться на приём
        </Link>
      </div>
    </div>
  );
}