import React from 'react';
import { Filter } from 'lucide-react';

interface MovieFiltersProps {
  onSortChange: (value: string) => void;
  onRatingChange: (value: number) => void;
  onYearChange: (value: number) => void;
  sortBy: string;
  minRating: number;
  year: number;
}

const MovieFilters: React.FC<MovieFiltersProps> = ({
  onSortChange,
  onRatingChange,
  onYearChange,
  sortBy,
  minRating,
  year
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center mb-4">
        <Filter size={20} className="text-gray-500 mr-2" />
        <h3 className="font-semibold">Фильтры</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Сортировать по
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="rating">Рейтингу</option>
            <option value="year">Году</option>
            <option value="title">Названию</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Минимальный рейтинг
          </label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={minRating}
            onChange={(e) => onRatingChange(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-sm text-gray-500 text-center">{minRating}</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Год выпуска
          </label>
          <input
            type="number"
            value={year}
            onChange={(e) => onYearChange(Number(e.target.value))}
            min="1900"
            max={new Date().getFullYear()}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieFilters;