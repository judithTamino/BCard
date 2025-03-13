export interface IAddress {
  state?:string;
  country: string;
  city:string;
  street:string;
  houseNumber:number;
  zip:number;
  _id?: string;
}