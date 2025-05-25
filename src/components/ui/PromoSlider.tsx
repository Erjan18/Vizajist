import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Promo } from '../../types';
import Button from './Button';

interface PromoSliderProps {
  promos: Promo[];
}

const PromoSlider: React.FC<PromoSliderProps> = ({ promos }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === promos.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? promos.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
      {promos.map((promo, index) => (
        <div
          key={promo.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
          <img
            src={promo.image}
            alt={promo.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{promo.title}</h2>
            <p className="text-white/80 text-base md:text-lg mb-6">{promo.description}</p>
            <Link to={promo.link}>
              <Button size="lg">Подробнее</Button>
            </Link>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-colors"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-colors"
        aria-label="Следующий слайд"
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {promos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoSlider;