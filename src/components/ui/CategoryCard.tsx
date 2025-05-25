import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Category } from '../../types';
import { getCategoryIcon } from '../../data/categories';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const Icon = getCategoryIcon(category.icon);

  return (
    <Link 
      to={`/catalog/${category.slug}`}
      className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 group"
    >
      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-200 transition-colors">
        <Icon size={32} className="text-orange-500" />
      </div>
      
      <h3 className="text-base font-medium text-center mb-1">{category.name}</h3>
      
      <ul className="text-sm text-gray-600 w-full">
        {category.subcategories.slice(0, 3).map(subcategory => (
          <li key={subcategory.id} className="mb-1">
            <Link 
              to={`/catalog/${category.slug}/${subcategory.slug}`}
              className="hover:text-orange-500 transition-colors"
            >
              - {subcategory.name}
            </Link>
          </li>
        ))}
      </ul>
      
      {category.subcategories.length > 3 && (
        <Link 
          to={`/catalog/${category.slug}`}
          className="text-sm text-orange-500 mt-2 flex items-center group-hover:underline"
        >
          Показать все
          <ChevronRight size={14} className="ml-1" />
        </Link>
      )}
    </Link>
  );
};

export default CategoryCard;