export interface OrderItem {
  id: number,
  nameProduct: number,
  count: number,
  price: number,
  'Product.price': number,
  'Product.title': string,
}

export interface State {
  orderItems: OrderItem[],
  error: {
    message?: string;
  };
}
