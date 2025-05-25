import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Кирпич рядовой полнотелый М-150',
    category: 'Общестроительные материалы',
    subcategory: 'Кирпич',
    price: 14.5,
    oldPrice: 16.0,
    description: 'Кирпич рядовой полнотелый одинарный М-150 применяется для кладки внутренних и наружных стен, перегородок, а также для кладки фундаментов, каминов, печей и дымовых труб. Имеет высокую прочность и морозостойкость.',
    specifications: {
      'Марка прочности': 'М-150',
      'Размер': '250x120x65 мм',
      'Вес': '3.6 кг',
      'Морозостойкость': 'F50',
      'Водопоглощение': '8%',
      'Теплопроводность': '0.55 Вт/м*К',
      'Количество в поддоне': '480 шт'
    },
    images: [
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      'https://images.pexels.com/photos/2219025/pexels-photo-2219025.jpeg'
    ],
    inStock: true,
    isPopular: true,
    brand: 'КирпичСтрой',
    rating: 4.7,
    reviews: [
      {
        id: 101,
        userName: 'Иван Петров',
        date: '15.04.2025',
        rating: 5,
        text: 'Отличный кирпич, высокое качество, без сколов и трещин. Доставили вовремя.'
      },
      {
        id: 102,
        userName: 'Сергей Иванов',
        date: '03.03.2025',
        rating: 4,
        text: 'Хороший кирпич, но некоторые штуки имели сколы. В целом качество хорошее.'
      }
    ],
    unit: 'шт'
  },
  {
    id: 2,
    name: 'Цемент ПЦ-500 Д0',
    category: 'Общестроительные материалы',
    subcategory: 'Цемент',
    price: 430,
    description: 'Портландцемент ПЦ-500 Д0 - гидравлическое вяжущее вещество, предназначенное для изготовления бетонных и железобетонных конструкций ответственного назначения, в том числе для гидротехнических сооружений.',
    specifications: {
      'Марка': 'ПЦ-500 Д0',
      'Вес': '50 кг',
      'Прочность': '500 кгс/см²',
      'Срок схватывания': '45-390 мин',
      'Тонкость помола': '3-4%'
    },
    images: [
      'https://images.pexels.com/photos/6460787/pexels-photo-6460787.jpeg',
      'https://images.pexels.com/photos/6460788/pexels-photo-6460788.jpeg'
    ],
    inStock: true,
    isPopular: true,
    brand: 'ЦементПром',
    rating: 4.9,
    reviews: [
      {
        id: 201,
        userName: 'Алексей Смирнов',
        date: '20.04.2025',
        rating: 5,
        text: 'Отличный цемент, хорошо схватывается и не имеет комков. Рекомендую.'
      }
    ],
    unit: 'мешок'
  },
  {
    id: 3,
    name: 'Краска интерьерная акриловая матовая белая',
    category: 'Отделочные материалы',
    subcategory: 'Краски',
    price: 1850,
    oldPrice: 2100,
    description: 'Высококачественная акриловая краска для внутренних работ. Имеет высокую укрывистость, хорошо наносится и не имеет резкого запаха. Подходит для стен и потолков в жилых помещениях.',
    specifications: {
      'Объем': '10 л',
      'Тип': 'Акриловая',
      'Цвет': 'Белый',
      'Степень блеска': 'Матовая',
      'Расход': '8-10 м²/л',
      'Время высыхания': '1-2 часа',
      'Стойкость к мытью': 'Класс 1'
    },
    images: [
      'https://images.pexels.com/photos/6368836/pexels-photo-6368836.jpeg',
      'https://images.pexels.com/photos/6368837/pexels-photo-6368837.jpeg'
    ],
    inStock: true,
    isPopular: true,
    brand: 'КрасКо',
    rating: 4.8,
    reviews: [
      {
        id: 301,
        userName: 'Елена Иванова',
        date: '10.03.2025',
        rating: 5,
        text: 'Прекрасная краска! Нанесла два слоя и получила идеально белый цвет стен.'
      },
      {
        id: 302,
        userName: 'Дмитрий Козлов',
        date: '05.03.2025',
        rating: 4,
        text: 'Хорошая краска, но расход немного больше заявленного.'
      }
    ],
    unit: 'банка'
  },
  {
    id: 4,
    name: 'Дрель ударная DeWalt DWD024',
    category: 'Инструменты',
    subcategory: 'Электроинструменты',
    price: 7500,
    oldPrice: 8200,
    description: 'Профессиональная ударная дрель DeWalt DWD024 с мощным двигателем и регулировкой скорости. Подходит для сверления отверстий в дереве, металле и бетоне.',
    specifications: {
      'Мощность': '650 Вт',
      'Скорость вращения': '0-2800 об/мин',
      'Диаметр патрона': '13 мм',
      'Макс. диаметр сверления (дерево)': '25 мм',
      'Макс. диаметр сверления (металл)': '13 мм',
      'Макс. диаметр сверления (бетон)': '16 мм',
      'Вес': '1.8 кг',
      'Длина кабеля': '4 м'
    },
    images: [
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg',
      'https://images.pexels.com/photos/1249612/pexels-photo-1249612.jpeg'
    ],
    inStock: true,
    brand: 'DeWalt',
    rating: 4.9,
    reviews: [
      {
        id: 401,
        userName: 'Николай Петров',
        date: '22.04.2025',
        rating: 5,
        text: 'Отличная дрель, работает тихо и без вибраций. Справляется с любыми задачами.'
      },
      {
        id: 402,
        userName: 'Антон Сидоров',
        date: '15.04.2025',
        rating: 5,
        text: 'Использую в профессиональных целях, очень доволен покупкой.'
      }
    ],
    unit: 'шт'
  },
  {
    id: 5,
    name: 'Плитка керамическая настенная глянцевая белая',
    category: 'Отделочные материалы',
    subcategory: 'Плитка',
    price: 750,
    description: 'Белая глянцевая керамическая плитка для стен. Подходит для ванных комнат, кухонь и других помещений с повышенной влажностью.',
    specifications: {
      'Размер': '200x300 мм',
      'Толщина': '7 мм',
      'Цвет': 'Белый',
      'Поверхность': 'Глянцевая',
      'Морозостойкость': 'Нет',
      'Количество в упаковке': '25 шт',
      'Площадь упаковки': '1.5 м²',
      'Вес упаковки': '18 кг'
    },
    images: [
      'https://images.pexels.com/photos/6444260/pexels-photo-6444260.jpeg',
      'https://images.pexels.com/photos/6444261/pexels-photo-6444261.jpeg'
    ],
    inStock: true,
    brand: 'КерамТайл',
    rating: 4.6,
    reviews: [
      {
        id: 501,
        userName: 'Марина Соколова',
        date: '01.04.2025',
        rating: 5,
        text: 'Плитка отличного качества, ровная, без сколов и дефектов.'
      },
      {
        id: 502,
        userName: 'Андрей Васильев',
        date: '20.03.2025',
        rating: 4,
        text: 'Хорошая плитка, но в упаковке было несколько штук с небольшими сколами.'
      }
    ],
    unit: 'м²'
  },
  {
    id: 6,
    name: 'Утеплитель минеральная вата ROCKWOOL',
    category: 'Общестроительные материалы',
    subcategory: 'Утеплитель',
    price: 1250,
    description: 'Негорючий теплоизоляционный материал на основе каменной ваты. Предназначен для теплоизоляции стен, кровель, перекрытий и других конструкций.',
    specifications: {
      'Размер': '1000x600x100 мм',
      'Плотность': '35 кг/м³',
      'Теплопроводность': '0.037 Вт/м*К',
      'Количество в упаковке': '6 шт',
      'Площадь упаковки': '3.6 м²',
      'Объем упаковки': '0.36 м³',
      'Группа горючести': 'НГ (негорючий)'
    },
    images: [
      'https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg',
      'https://images.pexels.com/photos/5582598/pexels-photo-5582598.jpeg'
    ],
    inStock: true,
    isPopular: true,
    brand: 'ROCKWOOL',
    rating: 4.8,
    reviews: [
      {
        id: 601,
        userName: 'Владимир Кузнецов',
        date: '25.04.2025',
        rating: 5,
        text: 'Отличный утеплитель, не крошится при монтаже, хорошо держит форму.'
      }
    ],
    unit: 'упаковка'
  },
  {
    id: 7,
    name: 'Ламинат дуб натуральный 33 класс',
    category: 'Отделочные материалы',
    subcategory: 'Ламинат и паркет',
    price: 1350,
    oldPrice: 1500,
    description: 'Ламинат с имитацией натурального дуба, 33 класса износостойкости. Подходит для использования в жилых и коммерческих помещениях с высокой проходимостью.',
    specifications: {
      'Размер': '1380x193x8 мм',
      'Класс износостойкости': '33',
      'Фаска': '4V',
      'Замок': 'Click-замок',
      'Количество в упаковке': '8 шт',
      'Площадь упаковки': '2.13 м²',
      'Вес упаковки': '15 кг',
      'Влагостойкость': 'Да'
    },
    images: [
      'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg',
      'https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg'
    ],
    inStock: true,
    brand: 'ЛаминатПро',
    rating: 4.7,
    reviews: [
      {
        id: 701,
        userName: 'Екатерина Смирнова',
        date: '12.04.2025',
        rating: 5,
        text: 'Прекрасный ламинат, выглядит как настоящее дерево. Легко укладывается.'
      },
      {
        id: 702,
        userName: 'Олег Иванов',
        date: '05.04.2025',
        rating: 4,
        text: 'Хороший ламинат, но в одной упаковке была доска с поврежденным замком.'
      }
    ],
    unit: 'м²'
  },
  {
    id: 8,
    name: 'Обои виниловые на флизелиновой основе',
    category: 'Отделочные материалы',
    subcategory: 'Обои',
    price: 1200,
    description: 'Виниловые обои на флизелиновой основе с геометрическим узором. Устойчивы к выцветанию и механическим повреждениям.',
    specifications: {
      'Размер': '10.05x0.53 м',
      'Площадь': '5.32 м²',
      'Основа': 'Флизелин',
      'Покрытие': 'Винил',
      'Стиль': 'Геометрический',
      'Цвет': 'Бежевый с золотом',
      'Моющиеся': 'Да'
    },
    images: [
      'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg',
      'https://images.pexels.com/photos/6267517/pexels-photo-6267517.jpeg'
    ],
    inStock: true,
    brand: 'ОбоиЛюкс',
    rating: 4.5,
    reviews: [
      {
        id: 801,
        userName: 'Анна Морозова',
        date: '18.04.2025',
        rating: 5,
        text: 'Красивые обои, стыки почти не видны, клеятся легко.'
      },
      {
        id: 802,
        userName: 'Игорь Соколов',
        date: '10.04.2025',
        rating: 4,
        text: 'Обои хорошие, но рисунок немного отличается от фото на сайте.'
      }
    ],
    unit: 'рулон'
  }
];

export const getPopularProducts = () => {
  return products.filter(product => product.isPopular);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string) => {
  return products.filter(product => product.subcategory === subcategory);
};

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: number, limit: number = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.subcategory === product.subcategory)
    .slice(0, limit);
};