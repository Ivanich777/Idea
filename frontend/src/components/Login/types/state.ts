export interface User {
  id: number,
  email:string,
  password: string,
  name: string,
}

export interface Res {
  message: string, user: string
}
export interface State {
  user: User;
  error:{
    message?:string;
  }
}
