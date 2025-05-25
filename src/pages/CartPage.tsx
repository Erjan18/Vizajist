import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useCart } from '../context/CartContext';
import { deliveryMethods } from '../data/delivery';
import { DeliveryMethod, PaymentMethod } from '../types';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [activeStep, setActiveStep] = useState<'cart' | 'checkout'>('cart');
  
  // Checkout state
  const [selectedDelivery, setSelectedDelivery] = useState<DeliveryMethod | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    comment: ''
  });
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePromoApply = () => {
    // In a real application, this would make an API call to validate the promo code
    if (promoCode === 'DISCOUNT10') {
      setPromoDiscount(totalPrice * 0.1);
    } else {
      alert('Недействительный промокод');
    }
  };
  
  const handleCheckout = () => {
    if (!selectedDelivery) {
      alert('Пожалуйста, выберите способ доставки');
      return;
    }
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Пожалуйста, заполните обязательные поля');
      return;
    }
    
    if (selectedDelivery.id !== 'self-pickup' && !formData.address) {
      alert('Пожалуйста, укажите адрес доставки');
      return;
    }
    
    // In a real application, this would submit the order to the backend
    alert('Заказ успешно оформлен!');
    clearCart();
  };
  
  const finalTotal = totalPrice + (selectedDelivery?.price || 0) - promoDiscount;
  
  if (cart.length === 0 && activeStep === 'cart') {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Корзина</h1>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <svg
            className="w-24 h-24 mx-auto mb-4 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h2 className="text-xl font-medium mb-4">Ваша корзина пуста</h2>
          <p className="text-gray-500 mb-6">
            Выберите интересующие вас товары и добавьте их в корзину
          </p>
          <Link to="/catalog">
            <Button>Перейти в каталог</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center text-sm text-gray-500">
        <Link to="/" className="hover:text-orange-500">Главная</Link>
        <ChevronRight size={14} className="mx-2" />
        <span className="font-medium text-gray-900">Корзина</span>
      </div>
      
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">
        {activeStep === 'cart' ? 'Корзина' : 'Оформление заказа'}
      </h1>
      
      {/* Steps indicator */}
      <div className="flex mb-8">
        <button
          onClick={() => setActiveStep('cart')}
          className={`flex-1 py-3 px-4 text-center border-b-2 ${
            activeStep === 'cart' 
              ? 'border-orange-500 text-orange-500 font-medium' 
              : 'border-gray-200 text-gray-500'
          }`}
        >
          1. Корзина
        </button>
        <button
          onClick={() => cart.length > 0 && setActiveStep('checkout')}
          className={`flex-1 py-3 px-4 text-center border-b-2 ${
            activeStep === 'checkout' 
              ? 'border-orange-500 text-orange-500 font-medium' 
              : 'border-gray-200 text-gray-500'
          }`}
          disabled={cart.length === 0}
        >
          2. Оформление заказа
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          {activeStep === 'cart' ? (
            /* Cart items */
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Товары в корзине</h2>
              </div>
              
              <div>
                {cart.map(item => (
                  <div key={item.product.id} className="p-6 border-b border-gray-200 flex flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-4 mb-4 sm:mb-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <Link to={`/product/${item.product.id}`} className="font-medium hover:text-orange-500">
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-gray-500 mb-2">{item.product.brand}</p>
                      
                      <div className="flex flex-wrap items-center justify-between mt-2">
                        <div className="flex items-center mb-4 sm:mb-0">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="mx-3">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between w-full sm:w-auto">
                          <div className="sm:text-right">
                            <div className="font-semibold">
                              {(item.product.price * item.quantity).toLocaleString('ru-RU')} сом
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.product.price.toLocaleString('ru-RU')} сом / {item.product.unit}
                            </div>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="ml-4 text-gray-400 hover:text-red-500 transition-colors"
                            aria-label="Удалить товар"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 flex justify-between">
                <Button variant="outline" onClick={clearCart}>
                  Очистить корзину
                </Button>
                <Button 
                  onClick={() => setActiveStep('checkout')}
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Оформить заказ
                </Button>
              </div>
            </div>
          ) : (
            /* Checkout form */
            <div>
              {/* Delivery options */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold">Способ доставки</h2>
                </div>
                
                <div className="p-6 space-y-4">
                  {deliveryMethods.map(method => (
                    <label 
                      key={method.id} 
                      className={`block p-4 border rounded-md cursor-pointer transition-colors ${
                        selectedDelivery?.id === method.id 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start">
                        <input
                          type="radio"
                          name="delivery"
                          checked={selectedDelivery?.id === method.id}
                          onChange={() => setSelectedDelivery(method)}
                          className="mt-1 mr-3 text-orange-500 focus:ring-orange-500"
                        />
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <span className="font-medium">{method.name}</span>
                            <span className="font-medium">
                              {method.price === 0 ? 'Бесплатно' : `${method.price.toLocaleString('ru-RU')} сом`}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{method.description}</p>
                          <p className="text-sm text-gray-500 mt-1">Срок доставки: {method.estimatedDays}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Payment options */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold">Способ оплаты</h2>
                </div>
                
                <div className="p-6 space-y-4">
                  <label 
                    className={`block p-4 border rounded-md cursor-pointer transition-colors ${
                      paymentMethod === 'card' 
                        ? 'border-orange-500 bg-orange-50' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="mr-3 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="font-medium">Банковской картой онлайн</span>
                    </div>
                  </label>
                  
                  <label 
                    className={`block p-4 border rounded-md cursor-pointer transition-colors ${
                      paymentMethod === 'cash' 
                        ? 'border-orange-500 bg-orange-50' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'cash'}
                        onChange={() => setPaymentMethod('cash')}
                        className="mr-3 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="font-medium">Наличными при получении</span>
                    </div>
                  </label>
                  
                  <label 
                    className={`block p-4 border rounded-md cursor-pointer transition-colors ${
                      paymentMethod === 'online' 
                        ? 'border-orange-500 bg-orange-50' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'online'}
                        onChange={() => setPaymentMethod('online')}
                        className="mr-3 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="font-medium">Онлайн-платеж (ЮMoney, WebMoney)</span>
                    </div>
                  </label>
                </div>
              </div>
              
              {/* Contact info */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold">Контактная информация</h2>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Имя *"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      fullWidth
                      required
                    />
                    
                    <Input
                      label="Телефон *"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      fullWidth
                      required
                    />
                  </div>
                  
                  <Input
                    label="Email *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    fullWidth
                    required
                  />
                  
                  {selectedDelivery && selectedDelivery.id !== 'self-pickup' && (
                    <Input
                      label="Адрес доставки *"
                      name="address"
                      value={formData.address}
                      onChange={handleFormChange}
                      fullWidth
                      required
                    />
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Комментарий к заказу
                    </label>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleFormChange}
                      rows={3}
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Ваш заказ</h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Товары ({cart.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
                  <span>{totalPrice.toLocaleString('ru-RU')} сом</span>
                </div>
                
                {selectedDelivery && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Доставка</span>
                    <span>
                      {selectedDelivery.price === 0 
                        ? 'Бесплатно' 
                        : `${selectedDelivery.price.toLocaleString('ru-RU')} сом`}
                    </span>
                  </div>
                )}
                
                {promoDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Промокод</span>
                    <span>-{promoDiscount.toLocaleString('ru-RU')} сом</span>
                  </div>
                )}
                
                <div className="pt-3 border-t border-gray-200 flex justify-between font-semibold text-lg">
                  <span>Итого</span>
                  <span>{finalTotal.toLocaleString('ru-RU')} сом</span>
                </div>
              </div>
              
              {/* Promo code */}
              {activeStep === 'cart' && (
                <div className="mb-6">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Промокод"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      fullWidth
                    />
                    <Button 
                      onClick={handlePromoApply}
                      disabled={!promoCode}
                      variant="outline"
                    >
                      Применить
                    </Button>
                  </div>
                </div>
              )}
              
              {activeStep === 'cart' ? (
                <Button 
                  onClick={() => setActiveStep('checkout')}
                  fullWidth
                  size="lg"
                >
                  Оформить заказ
                </Button>
              ) : (
                <div>
                  <Button 
                    onClick={handleCheckout}
                    fullWidth
                    size="lg"
                    className="mb-3"
                  >
                    Подтвердить заказ
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с условиями <Link to="/terms" className="text-orange-500 hover:underline">пользовательского соглашения</Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;