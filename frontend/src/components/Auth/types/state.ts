export interface User {
  email:string,
  password: string,
  name: string,
  surname: string,
  admin: boolean,
  phone: string,
}

export interface State {
  users: User[];
}

export type UserId = User['id'];
