export interface FeedbackProduct {
  name:string,
  phone:string,
  img:string,
  email:string,
  description:string,
}
export interface State {
  feedbacks:FeedbackProduct[],
  error:{
    message?:string;
  }
}
// export type FeedbackProductId = FeedbackProduct['id'];
