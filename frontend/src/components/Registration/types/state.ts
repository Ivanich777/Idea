export interface User {
  id: number,
  email:string,
  password: string,
  name: string,
  surname: string,
  admin: boolean,
  phone: string,
}

export interface State {
  user: User;
}

export type UserId = User['id'];
