import { Movie } from '../types';

export const movies: Movie[] = [
  {
    id: 1,
    title: 'Начало',
    originalTitle: 'Inception',
    year: 2010,
    rating: 8.8,
    genres: [
      { id: 1, name: 'Боевик', slug: 'action' },
      { id: 4, name: 'Фантастика', slug: 'sci-fi' },
      { id: 6, name: 'Триллер', slug: 'thriller' }
    ],
    description: 'Кобб – талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим.',
    poster: 'https://images.pexels.com/photos/8132743/pexels-photo-8132743.jpeg',
    backdrop: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    duration: 148,
    cast: [
      { id: 1, name: 'Леонардо ДиКаприо', photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg', character: 'Кобб' },
      { id: 2, name: 'Джозеф Гордон-Левитт', photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg', character: 'Артур' }
    ]
  },
  {
    id: 2,
    title: 'Интерстеллар',
    originalTitle: 'Interstellar',
    year: 2014,
    rating: 8.6,
    genres: [
      { id: 4, name: 'Фантастика', slug: 'sci-fi' },
      { id: 3, name: 'Драма', slug: 'drama' },
      { id: 7, name: 'Приключения', slug: 'adventure' }
    ],
    description: 'Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину в поисках планеты с подходящими для человечества условиями.',
    poster: 'https://images.pexels.com/photos/8132743/pexels-photo-8132743.jpeg',
    backdrop: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    duration: 169,
    cast: [
      { id: 3, name: 'Мэттью МакКонахи', photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg', character: 'Купер' },
      { id: 4, name: 'Энн Хэтэуэй', photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg', character: 'Бранд' }
    ]
  }
];

export const getMoviesByGenre = (genreSlug: string): Movie[] => {
  return movies.filter(movie => 
    movie.genres.some(genre => genre.slug === genreSlug)
  );
};

export const getMovieById = (id: number): Movie | undefined => {
  return movies.find(movie => movie.id === id);
};

export const searchMovies = (query: string): Movie[] => {
  const searchTerm = query.toLowerCase();
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm) ||
    movie.originalTitle.toLowerCase().includes(searchTerm)
  );
};