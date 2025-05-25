import { Promo } from '../types';

export const promos: Promo[] = [
  {
    id: 1,
    title: 'Скидки до 30% на кровельные материалы',
    description: 'Только до конца мая! Большой выбор металлочерепицы и профнастила по выгодным ценам.',
    image: 'https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg',
    link: '/catalog/roofing'
  },
  {
    id: 2,
    title: 'Распродажа керамической плитки',
    description: 'Скидки до 25% на коллекции керамической плитки ведущих производителей.',
    image: 'https://images.pexels.com/photos/6444260/pexels-photo-6444260.jpeg',
    link: '/catalog/finishing-materials/tile'
  },
  {
    id: 3,
    title: 'Бесплатная доставка при заказе от 30 000 сом',
    description: 'Оформите заказ на сумму от 30 000 сом и получите бесплатную доставку по городу.',
    image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg',
    link: '/delivery'
  }
];