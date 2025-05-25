import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../data/movies';
import MovieCard from '../components/ui/MovieCard';
import SearchBar from '../components/ui/SearchBar';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const movies = query ? searchMovies(query) : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Поиск фильмов</h1>
      
      <div className="max-w-2xl mx-auto mb-8">
        <SearchBar />
      </div>

      {query && (
        <p className="text-gray-600 mb-6">
          {movies.length > 0 
            ? `Найдено ${movies.length} фильмов по запросу "${query}"`
            : `По запросу "${query}" ничего не найдено`
          }
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;