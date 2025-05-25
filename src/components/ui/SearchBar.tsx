import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex-grow max-w-2xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск фильмов..."
        className="w-full px-4 py-2 pl-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <Search 
        size={20} 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
    </form>
  );
};

export default SearchBar;