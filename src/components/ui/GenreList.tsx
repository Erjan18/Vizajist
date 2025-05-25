import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { genres } from '../../data/genres';

const GenreList: React.FC = () => {
  const location = useLocation();
  const currentGenre = location.pathname.split('/genre/')[1];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Жанры</h2>
      <div className="space-y-2">
        {genres.map(genre => (
          <Link
            key={genre.id}
            to={`/genre/${genre.slug}`}
            className={`block px-4 py-2 rounded-md transition-colors ${
              currentGenre === genre.slug
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenreList;