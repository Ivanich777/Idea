export interface User {
  id: number,
  email:string,
  password: string,
  name: string,
  surname: string,
  admin: boolean,
  phone: string,
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
export interface FormInputs {
  email: string;
  password: string;
  checkPassword:string;
  phone:string;
  name:string;
  surname:string;
}

export type UserId = User['id'];
