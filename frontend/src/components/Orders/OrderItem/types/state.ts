export interface OrderItem {
  nameProduct: number,
  count: number,
  price: number,
}

export interface State {
  orderItems: OrderItem[],
  error: {
    message?: string;
  };
}
