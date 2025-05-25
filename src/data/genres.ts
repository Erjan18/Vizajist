import { Genre } from '../types';

export const genres: Genre[] = [
  { id: 1, name: 'Боевик', slug: 'action' },
  { id: 2, name: 'Комедия', slug: 'comedy' },
  { id: 3, name: 'Драма', slug: 'drama' },
  { id: 4, name: 'Фантастика', slug: 'sci-fi' },
  { id: 5, name: 'Ужасы', slug: 'horror' },
  { id: 6, name: 'Триллер', slug: 'thriller' },
  { id: 7, name: 'Приключения', slug: 'adventure' },
  { id: 8, name: 'Мультфильм', slug: 'animation' },
  { id: 9, name: 'Детектив', slug: 'detective' },
  { id: 10, name: 'Мелодрама', slug: 'romance' }
];

export const getGenreBySlug = (slug: string): Genre | undefined => {
  return genres.find(genre => genre.slug === slug);
};

export const getGenreById = (id: number): Genre | undefined => {
  return genres.find(genre => genre.id === id);
};