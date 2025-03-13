import { ISignup } from "../interfaces/forms/ISignup";
import { IUser } from "../interfaces/users/IUser";

export const validUser = (data:ISignup) : IUser => {
  return {
    name: {
      first: data.first,
      middle: data.middle,
      last: data.last
    },
    phone: data.phone,
    email: data.email,
    password: data.password,
    image: {
      url:data.image_url,
      alt:data.image_alt
    },
    address: {
      state:data.state,
      country:data.country,
      city:data.city,
      street:data.street,
      houseNumber:data.house_number,
      zip:data.zip
    },
    isBusiness:data.is_business
  };
}