import { IAddress } from "../IAddress";
import { IUserImage } from "./IUserImage";
import { IUserName } from "./IUserName";

export interface IUser {
  name: IUserName;
  phone:string;
  email:string;
  password:string;
  image: IUserImage;
  address: IAddress;
  isBusiness: boolean;
}