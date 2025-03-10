import { FunctionComponent } from 'react';
import { Card } from '../../interfaces/cards/Card';
import './BCard.css';

interface BCardProps {
  card: Card;
}

const BCard: FunctionComponent<BCardProps> = ({ card }) => {

  const addDefaultImg = (event:any) => {
    event.target.src = './defualt-image.png';
  } 

  return (
    <article className='card'>
      <img src={card.image.url} alt={card.image.alt} className='card-img' onError={addDefaultImg}/>

      <div className='card-data'>
        <h3 className='card-title'>{card.title}</h3>
        <p className='card-subtitle'>{card.subtitle}</p>

        <ul className='card-details'>
          <li className='card-list'>
            <i className='ri-phone-fill'></i>
            <span className='card-txt'>{card.phone}</span>
          </li>

          <li className='card-list'>
            <i className='ri-map-pin-2-fill'></i>
            <span className='card-txt'>
              {`${card.address.street} ${card.address.houseNumber} ${card.address.city}, ${card.address.country}`}
            </span>
          </li>
          
          <li className='card-list'>
            <i className='ri-hashtag'></i>
            <span className='card-txt'>{card.bizNumber}</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default BCard;
