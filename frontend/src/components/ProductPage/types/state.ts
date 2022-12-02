export interface Product {
  article: number,
  title: string,
  description: string,
  count: number,
  price: number,
  idCategory: number,
}

export interface State {
  product: Product;
}