export interface ProductOrder {
  title: string,
  count: number,
  price: number,
  sale: number,
}

export interface State {
  basket: ProductOrder [],
}

// export type productId = Product['id'];

// export type Action =
// | { type: 'init'; payload: Product [] };