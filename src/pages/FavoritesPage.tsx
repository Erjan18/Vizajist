import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import MovieCard from '../components/ui/MovieCard';

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Heart size={48} className="mx-auto text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold mb-4">Список избранного пуст</h1>
        <p className="text-gray-600 mb-8">
          Добавляйте понравившиеся фильмы в избранное, чтобы не потерять их.
        </p>
        <Link 
          to="/" 
          className="text-blue-500 hover:text-blue-600 font-medium"
        >
          Перейти к каталогу фильмов
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Избранные фильмы</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {favorites.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;