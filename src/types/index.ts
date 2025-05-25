export interface Movie {
  id: number;
  title: string;
  originalTitle: string;
  year: number;
  rating: number;
  genres: Genre[];
  description: string;
  poster: string;
  backdrop: string;
  duration: number;
  cast: Actor[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface Actor {
  id: number;
  name: string;
  photo: string;
  character: string;
}