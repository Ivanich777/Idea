export interface BasketItem {
  images: string,
  article: number,
  title: string,
  price: number,
  id: number,
  count: number,
}

export interface State {
  basketItems: BasketItem[],
}
