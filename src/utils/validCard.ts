import { Card } from "../interfaces/cards/Card";
import { ICreateCard } from "../interfaces/forms/ICreateCard";

export const validCard = (cardData:ICreateCard) : Card => {
  return {
    title:cardData.title,
    subtitle:cardData.subtitle,
    description:cardData.description,
    phone:cardData.phone,
    email:cardData.email,
    web:cardData.web,
    image: {
      url:cardData.image_url as string,
      alt:cardData.image_alt as string
    },
    address: {
      state:cardData.state,
      country:cardData.country,
      city:cardData.city,
      street:cardData.street,
      houseNumber:cardData.house_number,
      zip:cardData.zip
    }
  }
}