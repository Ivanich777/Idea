export interface Order {
  id: number,
  idUser: number,
  email?: string,
  name?: string,
  surname?: string,
  phone?: string,
  status: string,
  createdAt: string,
}

export interface State {
  orders: Order[],
  error: {
    message?: string;
  };
}
