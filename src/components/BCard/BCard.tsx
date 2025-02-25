import { FunctionComponent } from 'react';
import { Card } from '../../interfaces/cards/Card';
import './BCard.css';

interface BCardProps {
  card: Card;
}

const BCard: FunctionComponent<BCardProps> = ({ card }) => {
  return (
    <article className='card'>
      <img src={card.image.url} alt={card.image.alt} className='card-img' />

      <h3 className='card-title'>{card.title}</h3>
      <p className='card-subtitle'>{card.subtitle}</p>

      <ul className='card-details'>
        <li className='card-phone'>
          <i className='ri-phone-line'></i>
          <span>{card.phone}</span>
        </li>
        <li className='card-address'>
          <i className='ri-map-pin-line'></i>
          <span>{`${card.address.street} ${card.address.houseNumber} ${card.address.city}, ${card.address.country}`}</span>
        </li>
        <li className='card-number'>
          <i className='ri-hashtag'></i>
          <span>{card.bizNumber}</span>
        </li>
      </ul>
    </article>
  );
};

export default BCard;
