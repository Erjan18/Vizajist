import React from 'react';
import { useParams } from 'react-router-dom';
import { genres } from '../data/genres';
import { movies } from '../data/movies';
import MovieCard from '../components/ui/MovieCard';

function GenrePage() {
  const { genreSlug } = useParams();
  const genre = genres.find(g => g.slug === genreSlug);
  const genreMovies = movies.filter(movie => movie.genres.includes(genre?.id || ''));

  if (!genre) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Genre not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{genre.name} Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {genreMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {genreMovies.length === 0 && (
        <p className="text-gray-600 text-center py-8">No movies found in this genre.</p>
      )}
    </div>
  );
}

export default GenrePage;