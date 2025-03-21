import { Card } from '../interfaces/cards/Card';
import { ICreateCard } from '../interfaces/forms/ICreateCard';

export const unvalidCard = (cardData: Card): ICreateCard => {
  return {
    title: cardData.title,
    subtitle: cardData.subtitle,
    description: cardData.description,
    phone: cardData.phone,
    email: cardData.email,
    web: cardData.web,
    image_url: cardData.image.url,
    image_alt: cardData.image.alt,
    state: cardData.address.state,
    country: cardData.address.country,
    city: cardData.address.city,
    street: cardData.address.street,
    house_number: cardData.address.houseNumber,
    zip: cardData.address.zip,
  };
};
