export interface Product {
  id: number,
  article: number,
  title: string,
  description: string,
  price: number,
  idCategory: number,
  images: [{
    path: string
  }],
}

export interface State {
  products: Product [],
  images: [],
}

export type productId = Product['id'];

export type Action =
| { type: 'init'; payload: Product [] };
