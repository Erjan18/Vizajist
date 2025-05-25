import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import { Movie } from '../../types';
import { useFavorites } from '../../context/FavoritesContext';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const isMovieFavorite = isFavorite(movie.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMovieFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <Link to={`/movie/${movie.id}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={movie.poster} 
          alt={movie.title}
          className="w-full h-[400px] object-cover"
        />
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isMovieFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
          }`}
        >
          <Heart size={20} fill={isMovieFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{movie.originalTitle}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="font-medium">{movie.rating}</span>
          </div>
          <span className="text-sm text-gray-500">{movie.year}</span>
        </div>
        
        <div className="mt-2 flex flex-wrap gap-2">
          {movie.genres.slice(0, 2).map(genre => (
            <span
              key={genre.id}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;