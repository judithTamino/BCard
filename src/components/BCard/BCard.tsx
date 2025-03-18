import '../../css/btn.css';
import '../../css/card.css';

import { FunctionComponent } from 'react';
import { Card } from '../../interfaces/cards/Card';
import { addDefaultImg } from '../../utils/addDefaultImg';
import useAuto from '../../context/AuthContext';

interface BCardProps {
  card: Card;
  likes: any;
  currentUserId:string | undefined;
  onLikeToggle: (cardId:string) => void;
}

const BCard: FunctionComponent<BCardProps> = ({ card, likes, currentUserId, onLikeToggle }) => {
  const isLiked = likes.includes(currentUserId);
  const { isLoggedIn } = useAuto();

  return (
    <article className='card'>
      <img
        src={card.image.url}
        alt={card.image.alt}
        className='card-img'
        onError={addDefaultImg}
      />

      <div className='card-data'>
        <h3 className='card-title'>{card.title}</h3>
        <p className='card-subtitle'>{card.subtitle}</p>

        <ul className='card-list'>
          <li className='card-item'>
            <i className='ri-phone-line'></i>
            <span className='card-txt'>{card.phone}</span>
          </li>

          <li className='card-item'>
            <i className='ri-map-pin-2-line'></i>
            <span className='card-txt'>
              {`${card.address.street} ${card.address.houseNumber} ${card.address.city}, ${card.address.country}`}
            </span>
          </li>

          <li className='card-item'>
            <span className='card-txt'>{card.bizNumber}</span>
          </li>
        </ul>
      </div>

      {isLoggedIn ? (
        <button
          className='fav-btn'
          onClick={() => onLikeToggle(card._id as string)}
        >
          {!isLiked? (
            <i className='ri-heart-line'></i>
          ) : (
            <i className='ri-heart-fill'></i>
          )}
        </button>
      ) : null}
    </article>
  );
};

export default BCard;
