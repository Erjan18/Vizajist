import { Category } from '../types';
import { ToyBrick as Brick, PaintBucket, Hammer, Wrench, Plug, ShowerHead as Shower, Ruler, CookingPot as Roofing } from 'lucide-react';

export const categories: Category[] = [
  {
    id: 1,
    name: 'Общестроительные материалы',
    slug: 'general-materials',
    icon: 'Brick',
    subcategories: [
      { id: 101, name: 'Кирпич', slug: 'brick', parentCategory: 'general-materials' },
      { id: 102, name: 'Бетон и растворы', slug: 'concrete', parentCategory: 'general-materials' },
      { id: 103, name: 'Цемент', slug: 'cement', parentCategory: 'general-materials' },
      { id: 104, name: 'Блоки', slug: 'blocks', parentCategory: 'general-materials' },
      { id: 105, name: 'Гипсокартон', slug: 'drywall', parentCategory: 'general-materials' },
      { id: 106, name: 'Пиломатериалы', slug: 'lumber', parentCategory: 'general-materials' }
    ]
  },
  {
    id: 2,
    name: 'Отделочные материалы',
    slug: 'finishing-materials',
    icon: 'PaintBucket',
    subcategories: [
      { id: 201, name: 'Краски', slug: 'paints', parentCategory: 'finishing-materials' },
      { id: 202, name: 'Обои', slug: 'wallpaper', parentCategory: 'finishing-materials' },
      { id: 203, name: 'Плитка', slug: 'tile', parentCategory: 'finishing-materials' },
      { id: 204, name: 'Ламинат и паркет', slug: 'flooring', parentCategory: 'finishing-materials' },
      { id: 205, name: 'Штукатурка', slug: 'plaster', parentCategory: 'finishing-materials' },
      { id: 206, name: 'Потолочные системы', slug: 'ceiling', parentCategory: 'finishing-materials' }
    ]
  },
  {
    id: 3,
    name: 'Инструменты',
    slug: 'tools',
    icon: 'Hammer',
    subcategories: [
      { id: 301, name: 'Электроинструменты', slug: 'power-tools', parentCategory: 'tools' },
      { id: 302, name: 'Ручные инструменты', slug: 'hand-tools', parentCategory: 'tools' },
      { id: 303, name: 'Измерительные инструменты', slug: 'measuring-tools', parentCategory: 'tools' },
      { id: 304, name: 'Сварочное оборудование', slug: 'welding-equipment', parentCategory: 'tools' },
      { id: 305, name: 'Садовый инструмент', slug: 'garden-tools', parentCategory: 'tools' }
    ]
  },
  {
    id: 4,
    name: 'Крепёж',
    slug: 'fasteners',
    icon: 'Wrench',
    subcategories: [
      { id: 401, name: 'Саморезы и шурупы', slug: 'screws', parentCategory: 'fasteners' },
      { id: 402, name: 'Гвозди', slug: 'nails', parentCategory: 'fasteners' },
      { id: 403, name: 'Анкеры', slug: 'anchors', parentCategory: 'fasteners' },
      { id: 404, name: 'Дюбели', slug: 'dowels', parentCategory: 'fasteners' },
      { id: 405, name: 'Метизы', slug: 'hardware', parentCategory: 'fasteners' }
    ]
  },
  {
    id: 5,
    name: 'Электрика',
    slug: 'electrical',
    icon: 'Plug',
    subcategories: [
      { id: 501, name: 'Провода и кабели', slug: 'wires', parentCategory: 'electrical' },
      { id: 502, name: 'Розетки и выключатели', slug: 'sockets', parentCategory: 'electrical' },
      { id: 503, name: 'Щиты и автоматы', slug: 'switchboards', parentCategory: 'electrical' },
      { id: 504, name: 'Светильники', slug: 'lighting', parentCategory: 'electrical' },
      { id: 505, name: 'Электроустановочные изделия', slug: 'electrical-fixtures', parentCategory: 'electrical' }
    ]
  },
  {
    id: 6,
    name: 'Сантехника',
    slug: 'plumbing',
    icon: 'Shower',
    subcategories: [
      { id: 601, name: 'Трубы и фитинги', slug: 'pipes', parentCategory: 'plumbing' },
      { id: 602, name: 'Смесители', slug: 'faucets', parentCategory: 'plumbing' },
      { id: 603, name: 'Раковины и мойки', slug: 'sinks', parentCategory: 'plumbing' },
      { id: 604, name: 'Унитазы и биде', slug: 'toilets', parentCategory: 'plumbing' },
      { id: 605, name: 'Душевые кабины и ванны', slug: 'showers-baths', parentCategory: 'plumbing' }
    ]
  },
  {
    id: 7,
    name: 'Измерения и разметка',
    slug: 'measuring',
    icon: 'Ruler',
    subcategories: [
      { id: 701, name: 'Лазерные уровни', slug: 'laser-levels', parentCategory: 'measuring' },
      { id: 702, name: 'Рулетки', slug: 'tape-measures', parentCategory: 'measuring' },
      { id: 703, name: 'Строительные уровни', slug: 'construction-levels', parentCategory: 'measuring' },
      { id: 704, name: 'Дальномеры', slug: 'rangefinders', parentCategory: 'measuring' }
    ]
  },
  {
    id: 8,
    name: 'Кровельные материалы',
    slug: 'roofing',
    icon: 'Roofing',
    subcategories: [
      { id: 801, name: 'Металлочерепица', slug: 'metal-tile', parentCategory: 'roofing' },
      { id: 802, name: 'Профнастил', slug: 'corrugated-sheet', parentCategory: 'roofing' },
      { id: 803, name: 'Гибкая черепица', slug: 'shingles', parentCategory: 'roofing' },
      { id: 804, name: 'Водосточные системы', slug: 'drainage', parentCategory: 'roofing' }
    ]
  }
];

export const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Brick': return Brick;
    case 'PaintBucket': return PaintBucket;
    case 'Hammer': return Hammer;
    case 'Wrench': return Wrench;
    case 'Plug': return Plug;
    case 'Shower': return Shower;
    case 'Ruler': return Ruler;
    case 'Roofing': return Roofing;
    default: return Brick;
  }
};