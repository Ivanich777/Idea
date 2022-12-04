export interface Product {
  id: number,
  article: number,
  title: string,
  price: number
}
export interface State {
  products: Product []
}

export type productId = Product['id'];

export type Action =
| { type: 'init'; payload: Product [] };
