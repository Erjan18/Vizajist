import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Truck, ShoppingCart, Heart, Share2, Star, Check, Minus, Plus, Info } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(parseInt(productId || '0'));
  const relatedProducts = getRelatedProducts(parseInt(productId || '0'));
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
        <p className="mb-6">К сожалению, запрашиваемый товар не существует или был удален.</p>
        <Link to="/catalog">
          <Button>Вернуться в каталог</Button>
        </Link>
      </div>
    );
  }
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  // Generate breadcrumbs
  const categorySlug = product.category.toLowerCase().replace(/ /g, '-');
  const subcategorySlug = product.subcategory.toLowerCase().replace(/ /g, '-');
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center text-sm text-gray-500 flex-wrap">
        <Link to="/" className="hover:text-orange-500">Главная</Link>
        <ChevronRight size={14} className="mx-2" />
        <Link to="/catalog" className="hover:text-orange-500">Каталог</Link>
        <ChevronRight size={14} className="mx-2" />
        <Link to={`/catalog/${categorySlug}`} className="hover:text-orange-500">{product.category}</Link>
        <ChevronRight size={14} className="mx-2" />
        <Link to={`/catalog/${categorySlug}/${subcategorySlug}`} className="hover:text-orange-500">{product.subcategory}</Link>
        <ChevronRight size={14} className="mx-2" />
        <span className="font-medium text-gray-900 truncate max-w-[200px] sm:max-w-none">{product.name}</span>
      </div>
      
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">{product.name}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product images */}
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-80 sm:h-96 object-contain"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                    activeImage === index ? 'border-orange-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - изображение ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product info */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                <Star size={18} className="text-yellow-400 mr-1" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-gray-500 ml-1">({product.reviews.length} отзывов)</span>
              </div>
              <span className="text-green-600 flex items-center">
                <Check size={18} className="mr-1" />
                {product.inStock ? 'В наличии' : 'Нет в наличии'}
              </span>
            </div>
            
            <div className="mb-6">
              <span className="text-sm text-gray-500">Бренд: {product.brand}</span>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end mb-2">
                {product.oldPrice && (
                  <span className="text-gray-500 line-through mr-2">{product.oldPrice.toLocaleString('ru-RU')} сом</span>
                )}
                <span className="text-3xl font-bold">{product.price.toLocaleString('ru-RU')} сом</span>
                <span className="text-gray-500 ml-2">/ {product.unit}</span>
              </div>
              
              {product.oldPrice && (
                <div className="bg-red-100 text-red-700 px-2 py-1 inline-block rounded text-sm">
                  Скидка {Math.round((1 - product.price / product.oldPrice) * 100)}%
                </div>
              )}
            </div>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center border border-gray-300 rounded-md mr-4">
                <button
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="px-3 py-2 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Minus size={18} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 text-center border-x border-gray-300 py-2"
                />
                <button
                  onClick={incrementQuantity}
                  className="px-3 py-2 text-gray-500 hover:bg-gray-100"
                >
                  <Plus size={18} />
                </button>
              </div>
              
              <span className="text-gray-500">
                Итого: {(product.price * quantity).toLocaleString('ru-RU')} сом
              </span>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <Button 
                onClick={handleAddToCart}
                icon={<ShoppingCart size={18} />}
                size="lg"
              >
                В корзину
              </Button>
              
              <Button 
                variant="outline"
                icon={<Heart size={18} />}
                size="lg"
              >
                В избранное
              </Button>
              
              <Button 
                variant="outline"
                icon={<Share2 size={18} />}
                size="lg"
              >
                Поделиться
              </Button>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md flex items-start">
              <Truck size={20} className="text-blue-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">Доставка</p>
                <p className="text-sm text-gray-600">Доставка по городу от 500 сом. Бесплатно при заказе от 10 000 сом.</p>
                <Link to="/delivery" className="text-sm text-blue-500 hover:underline">Подробнее о доставке</Link>
              </div>
            </div>
          </div>
          
          {/* Specifications preview */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-4">Характеристики</h3>
            <ul className="space-y-2">
              {Object.entries(product.specifications).slice(0, 5).map(([key, value]) => (
                <li key={key} className="flex justify-between text-sm">
                  <span className="text-gray-500">{key}</span>
                  <span className="font-medium">{value}</span>
                </li>
              ))}
            </ul>
            {Object.keys(product.specifications).length > 5 && (
              <button
                onClick={() => setActiveTab('specifications')}
                className="text-orange-500 hover:underline text-sm mt-3"
              >
                Все характеристики
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'description'
                  ? 'border-b-2 border-orange-500 text-orange-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Описание
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'specifications'
                  ? 'border-b-2 border-orange-500 text-orange-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Характеристики
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-orange-500 text-orange-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Отзывы ({product.reviews.length})
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-b-lg shadow-md p-6">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p>{product.description}</p>
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <div>
              <h3 className="font-semibold mb-4">Технические характеристики</h3>
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex py-2 border-b border-gray-100">
                    <span className="w-1/2 text-gray-500">{key}</span>
                    <span className="w-1/2 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Отзывы покупателей</h3>
                <Button variant="outline">Написать отзыв</Button>
              </div>
              
              {product.reviews.length > 0 ? (
                <div className="space-y-6">
                  {product.reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{review.userName}</span>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                            fill={i < review.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{review.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Info size={48} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-500">У этого товара пока нет отзывов.</p>
                  <p className="mb-4">Будьте первым, кто оставит отзыв!</p>
                  <Button variant="outline">Написать отзыв</Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6">Похожие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;