export interface Category {
  id: number,
  title: string,
}
export interface State {
  categories: Category[]
}

export type Action =
  | { type: 'init'; payload: Category[] };
