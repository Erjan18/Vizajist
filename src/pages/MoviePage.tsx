import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Heart } from 'lucide-react';
import { getMovieById } from '../data/movies';
import { useFavorites } from '../context/FavoritesContext';

const MoviePage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const movie = getMovieById(Number(movieId));
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();

  if (!movie) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Фильм не найден</h1>
        <p className="text-gray-600 mb-8">К сожалению, запрашиваемый фильм не существует или был удален.</p>
        <Link to="/" className="text-blue-500 hover:text-blue-600">
          Вернуться на главную
        </Link>
      </div>
    );
  }

  const isMovieFavorite = isFavorite(movie.id);

  const handleFavoriteClick = () => {
    if (isMovieFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div>
      {/* Backdrop */}
      <div 
        className="w-full h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-10">
          {/* Poster */}
          <div className="md:col-span-1">
            <img 
              src={movie.poster} 
              alt={movie.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Movie info */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
                  <p className="text-gray-500">{movie.originalTitle}</p>
                </div>
                <button
                  onClick={handleFavoriteClick}
                  className={`p-2 rounded-full ${
                    isMovieFavorite ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <Heart size={24} fill={isMovieFavorite ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <Star size={20} className="text-yellow-400 mr-1" />
                  <span className="font-medium">{movie.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="text-gray-400 mr-1" />
                  <span>{movie.duration} мин.</span>
                </div>
                <span>{movie.year} год</span>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {movie.genres.map(genre => (
                    <Link
                      key={genre.id}
                      to={`/genre/${genre.slug}`}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
                    >
                      {genre.name}
                    </Link>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {movie.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">В ролях</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {movie.cast.map(actor => (
                    <div key={actor.id} className="text-center">
                      <img
                        src={actor.photo}
                        alt={actor.name}
                        className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
                      />
                      <p className="font-medium">{actor.name}</p>
                      <p className="text-sm text-gray-500">{actor.character}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;