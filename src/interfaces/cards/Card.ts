import { ICardImage } from "./CardImage";
import { IAddress } from "../IAddress";

export interface Card {
  _id?: string;
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web?: string;
  image: ICardImage;
  address: IAddress;
  bizNumber?: number;
  likes?: string[];
  user_id?: string;
}
