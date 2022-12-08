export interface Feature {
  id: number,
  title: string,
  description: string,
}

export interface Product {
  id?: number,
  article: number,
  title: string,
  description: string,
  count: number,
  price: number,
  idCategory: number,
  category: string,
  images: [{
    path: string
  }],
  image?: string,
  features: Feature[],
  updatedAt: string,
  isDeletable: boolean,
}

export interface State {
  products: Product[],
  images: [],
}

export type productId = Product['id'];

export type Action =
  | { type: 'init'; payload: Product[] };
