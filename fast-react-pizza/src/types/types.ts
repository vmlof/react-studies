export interface Pizza {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

export interface CartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface IOrder {
  id: string;
  customer: string;
  status: string;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  cart: CartItem[];
}

export interface NewOrder {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  cart: CartItem[];
}

export interface OrderUpdate {
  priority?: boolean;
  status?: string;
}

export interface GeocodingPosition {
  latitude: number;
  longitude: number;
}
