import { DeliveryMethod } from '../types';

export const deliveryMethods: DeliveryMethod[] = [
  {
    id: 'self-pickup',
    name: 'Самовывоз',
    description: 'Вы можете забрать заказ самостоятельно из нашего магазина по адресу: г. Москва, ул. Строительная, д.10',
    price: 0,
    estimatedDays: '1-2 дня'
  },
  {
    id: 'courier',
    name: 'Курьерская доставка',
    description: 'Доставка курьером до вашей двери. Доступна для заказов весом до 30 кг.',
    price: 500,
    estimatedDays: '1-3 дня'
  },
  {
    id: 'truck',
    name: 'Строительная доставка с разгрузкой',
    description: 'Доставка крупногабаритных и тяжелых материалов строительным транспортом с услугой разгрузки.',
    price: 2000,
    estimatedDays: '2-5 дней'
  }
];