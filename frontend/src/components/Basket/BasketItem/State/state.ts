export interface BasketItem {
  images: string,
  article: number,
  title: string,
  price: number,
}

export interface State {
  basketItems: BasketItem[],
}