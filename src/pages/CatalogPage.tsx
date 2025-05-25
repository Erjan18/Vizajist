import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Filter, X } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { categories } from '../data/categories';
import { products, getProductsByCategory, getProductsBySubcategory } from '../data/products';

const CatalogPage: React.FC = () => {
  const { categorySlug, subcategorySlug } = useParams<{ categorySlug?: string; subcategorySlug?: string }>();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentCategory, setCurrentCategory] = useState<any>(null);
  const [currentSubcategory, setCurrentSubcategory] = useState<any>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter state
  const [filters, setFilters] = useState({
    priceRange: { min: 0, max: 10000 },
    brands: [] as string[],
    inStock: false
  });
  
  // Get unique brands
  const allBrands = [...new Set(products.map(product => product.brand))];
  
  // Update products based on route params
  useEffect(() => {
    if (categorySlug) {
      const category = categories.find(cat => cat.slug === categorySlug);
      setCurrentCategory(category);
      
      if (subcategorySlug) {
        const subcategory = category?.subcategories.find(sub => sub.slug === subcategorySlug);
        setCurrentSubcategory(subcategory);
        
        if (subcategory) {
          setFilteredProducts(getProductsBySubcategory(subcategory.name));
        }
      } else {
        if (category) {
          setFilteredProducts(getProductsByCategory(category.name));
        }
        setCurrentSubcategory(null);
      }
    } else {
      setFilteredProducts(products);
      setCurrentCategory(null);
      setCurrentSubcategory(null);
    }
  }, [categorySlug, subcategorySlug]);
  
  // Apply filters
  const applyFilters = () => {
    let result = [...filteredProducts];
    
    // Price filter
    result = result.filter(product => 
      product.price >= filters.priceRange.min && 
      product.price <= filters.priceRange.max
    );
    
    // Brand filter
    if (filters.brands.length > 0) {
      result = result.filter(product => filters.brands.includes(product.brand));
    }
    
    // In stock filter
    if (filters.inStock) {
      result = result.filter(product => product.inStock);
    }
    
    return result;
  };
  
  const handleBrandChange = (brand: string) => {
    setFilters(prev => {
      const brands = prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand];
      
      return { ...prev, brands };
    });
  };
  
  const resetFilters = () => {
    setFilters({
      priceRange: { min: 0, max: 10000 },
      brands: [],
      inStock: false
    });
  };
  
  const displayedProducts = applyFilters();
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center text-sm text-gray-500">
        <Link to="/" className="hover:text-orange-500">Главная</Link>
        <ChevronRight size={14} className="mx-2" />
        
        {!categorySlug ? (
          <span className="font-medium text-gray-900">Каталог товаров</span>
        ) : (
          <>
            <Link to="/catalog" className="hover:text-orange-500">Каталог товаров</Link>
            <ChevronRight size={14} className="mx-2" />
            
            {!subcategorySlug ? (
              <span className="font-medium text-gray-900">{currentCategory?.name}</span>
            ) : (
              <>
                <Link to={`/catalog/${categorySlug}`} className="hover:text-orange-500">
                  {currentCategory?.name}
                </Link>
                <ChevronRight size={14} className="mx-2" />
                <span className="font-medium text-gray-900">{currentSubcategory?.name}</span>
              </>
            )}
          </>
        )}
      </div>
      
      <h1 className="text-3xl font-bold mb-8">
        {currentSubcategory?.name || currentCategory?.name || 'Каталог товаров'}
      </h1>
      
      {/* Categories grid - shown only on main catalog page */}
      {!categorySlug && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {categories.map(category => (
            <Link 
              key={category.id} 
              to={`/catalog/${category.slug}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-lg font-semibold mb-3">{category.name}</h2>
              <ul className="text-sm text-gray-600 space-y-1">
                {category.subcategories.slice(0, 5).map(subcategory => (
                  <li key={subcategory.id}>
                    <Link 
                      to={`/catalog/${category.slug}/${subcategory.slug}`}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {subcategory.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      )}
      
      {/* Subcategories - shown only on category page */}
      {categorySlug && !subcategorySlug && currentCategory && (
        <div className="mb-8 flex flex-wrap gap-3">
          {currentCategory.subcategories.map(subcategory => (
            <Link
              key={subcategory.id}
              to={`/catalog/${categorySlug}/${subcategory.slug}`}
              className="bg-white border border-gray-200 rounded-md px-4 py-2 text-sm hover:bg-orange-50 hover:border-orange-200 transition-colors"
            >
              {subcategory.name}
            </Link>
          ))}
        </div>
      )}
      
      {/* Mobile filter button */}
      <div className="lg:hidden mb-4">
        <Button 
          onClick={() => setIsFilterOpen(true)}
          variant="outline" 
          icon={<Filter size={18} />}
          fullWidth
        >
          Фильтры
        </Button>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Фильтры</h3>
              <button 
                onClick={resetFilters}
                className="text-sm text-orange-500 hover:underline"
              >
                Сбросить
              </button>
            </div>
            
            {/* Price filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Цена</h4>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  placeholder="От"
                  value={filters.priceRange.min}
                  onChange={(e) => setFilters(prev => ({
                    ...prev, 
                    priceRange: { ...prev.priceRange, min: parseInt(e.target.value) || 0 }
                  }))}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <span>—</span>
                <input
                  type="number"
                  placeholder="До"
                  value={filters.priceRange.max}
                  onChange={(e) => setFilters(prev => ({
                    ...prev, 
                    priceRange: { ...prev.priceRange, max: parseInt(e.target.value) || 0 }
                  }))}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            
            {/* Brand filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Бренд</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {allBrands.map(brand => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="mr-2 h-4 w-4 text-orange-500 focus:ring-orange-500"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>
            
            {/* Availability filter */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => setFilters(prev => ({ ...prev, inStock: e.target.checked }))}
                  className="mr-2 h-4 w-4 text-orange-500 focus:ring-orange-500"
                />
                Только в наличии
              </label>
            </div>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="flex-grow">
          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-medium mb-2">Товары не найдены</h3>
              <p className="text-gray-500 mb-4">По вашему запросу не найдено ни одного товара.</p>
              <Button onClick={resetFilters}>Сбросить фильтры</Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile filters */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Фильтры</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Price filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Цена</h4>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  placeholder="От"
                  value={filters.priceRange.min}
                  onChange={(e) => setFilters(prev => ({
                    ...prev, 
                    priceRange: { ...prev.priceRange, min: parseInt(e.target.value) || 0 }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <span>—</span>
                <input
                  type="number"
                  placeholder="До"
                  value={filters.priceRange.max}
                  onChange={(e) => setFilters(prev => ({
                    ...prev, 
                    priceRange: { ...prev.priceRange, max: parseInt(e.target.value) || 0 }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            
            {/* Brand filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Бренд</h4>
              <div className="space-y-3">
                {allBrands.map(brand => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="mr-2 h-5 w-5 text-orange-500 focus:ring-orange-500"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>
            
            {/* Availability filter */}
            <div className="mb-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => setFilters(prev => ({ ...prev, inStock: e.target.checked }))}
                  className="mr-2 h-5 w-5 text-orange-500 focus:ring-orange-500"
                />
                Только в наличии
              </label>
            </div>
            
            <div className="flex gap-3">
              <Button onClick={() => setIsFilterOpen(false)} fullWidth>
                Применить
              </Button>
              <Button 
                variant="outline" 
                onClick={resetFilters}
              >
                Сбросить
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;