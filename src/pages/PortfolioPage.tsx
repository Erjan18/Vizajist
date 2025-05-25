import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function PortfolioPage() {
  const portfolioItems = [
    {
      category: 'Маникюр',
      images: [
        'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg',
        'https://images.pexels.com/photos/3997383/pexels-photo-3997383.jpeg',
        'https://images.pexels.com/photos/4210276/pexels-photo-4210276.jpeg',
        'https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg'
      ]
    },
    {
      category: 'Макияж',
      images: [
        'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg',
        'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg',
        'https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg',
        'https://images.pexels.com/photos/2695750/pexels-photo-2695750.jpeg'
      ]
    },
    {
      category: 'Свадебный образ',
      images: [
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg',
        'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg',
        'https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg',
        'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Мои работы</h1>

      {/* About Master Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img 
              src="https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg"
              alt="Мастер за работой"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Анна Петрова</h2>
            <p className="text-gray-600 mb-4">
              Профессиональный мастер маникюра и визажист с опытом работы более 5 лет. 
              Постоянно совершенствую свои навыки, посещаю мастер-классы и обучающие семинары.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Образование и сертификаты:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Диплом школы маникюра "Nail Art Pro" (2018)</li>
                  <li>Сертификат визажиста международного класса (2019)</li>
                  <li>Курс повышения квалификации по свадебному макияжу (2020)</li>
                  <li>Мастер-класс по современным техникам маникюра (2021)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Специализация:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Классический и аппаратный маникюр</li>
                  <li>Дизайн ногтей любой сложности</li>
                  <li>Дневной и вечерний макияж</li>
                  <li>Свадебный образ (макияж + укладка)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Gallery */}
      <PhotoProvider>
        {portfolioItems.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.images.map((image, imageIndex) => (
                <PhotoView key={imageIndex} src={image}>
                  <div className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src={image} 
                      alt={`${category.category} ${imageIndex + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </PhotoView>
              ))}
            </div>
          </div>
        ))}
      </PhotoProvider>

      {/* Contact CTA */}
      <div className="bg-pink-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Понравились работы?</h2>
        <p className="text-gray-600 mb-6">
          Запишитесь на консультацию, и мы вместе создадим ваш идеальный образ
        </p>
        <a 
          href="/booking" 
          className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors"
        >
          Записаться на приём
        </a>
      </div>
    </div>
  );
}