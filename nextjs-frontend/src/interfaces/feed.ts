import IUser from "interfaces/user";

export default interface IFeed {
  id: string;
  created_at: string;
  body: string;
  author: IUser;
}
