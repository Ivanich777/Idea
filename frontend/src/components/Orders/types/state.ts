export interface Order {
  id: number,
  idUser: number,
  status: string
}

export interface State {
  orders: Order[],
  error: {
    message?: string;
  };
}
