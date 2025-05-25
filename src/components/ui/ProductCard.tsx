import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../../types';
import Button from './Button';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {product.oldPrice && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              Скидка {Math.round((1 - product.price / product.oldPrice) * 100)}%
            </div>
          )}
          <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow hover:bg-gray-100 transition-colors">
            <Heart size={18} className="text-gray-500 hover:text-red-500 transition-colors" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex items-center mb-1">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="text-sm text-gray-700">{product.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({product.reviews.length} отзывов)</span>
          </div>
          
          <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 h-10">{product.name}</h3>
          
          <p className="text-xs text-gray-500 mb-2">{product.brand}</p>
          
          <div className="flex items-center justify-between">
            <div>
              {product.oldPrice && (
                <span className="text-xs text-gray-500 line-through mr-2">{product.oldPrice.toLocaleString('ru-RU')} сом</span>
              )}
              <span className="text-lg font-semibold">{product.price.toLocaleString('ru-RU')} сом</span>
              <span className="text-xs text-gray-500 ml-1">/ {product.unit}</span>
            </div>
            
            <Button 
              size="sm" 
              icon={<ShoppingCart size={16} />}
              onClick={handleAddToCart}
              aria-label="Добавить в корзину"
              className="!p-2"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;