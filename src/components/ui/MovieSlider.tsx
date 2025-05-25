import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../../types';
import { Link } from 'react-router-dom';

interface MovieSliderProps {
  movies: Movie[];
}

const MovieSlider: React.FC<MovieSliderProps> = ({ movies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-[600px] overflow-hidden rounded-xl">
      {movies.map((movie, index) => (
        <Link
          key={movie.id}
          to={`/movie/${movie.id}`}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <img
            src={movie.backdrop}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-4xl font-bold text-white mb-4">{movie.title}</h2>
            <p className="text-white/90 text-lg max-w-2xl mb-4">{movie.description}</p>
            <div className="flex items-center space-x-4">
              <span className="text-white/80">{movie.year}</span>
              <span className="text-white/80">{movie.duration} мин.</span>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="text-white/80">{movie.rating}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Следующий слайд"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSlider;