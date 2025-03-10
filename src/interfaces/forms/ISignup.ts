export interface ISignup {
  first: string;
  middle?: string;
  last: string;
  phone: string;
  email: string;
  password: string;
  image_url?: string;
  image_alt?: string;
  state?: string;
  country: string;
  city: string;
  street: string;
  house_number: number;
  zip: number;
  is_business: boolean;
}
