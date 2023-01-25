export interface ProductOrder {
  id?: number;
  title: string,
  count: number,
  price: number,
  sale: number,
  idOrder: number,
  status: string,
  idOrderItem: number
}

export interface State {
  basket: ProductOrder [],
}

// export type productId = Product['id'];

// export type Action =
// | { type: 'init'; payload: Product [] };
