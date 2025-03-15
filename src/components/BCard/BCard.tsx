import { FunctionComponent, use, useEffect, useState } from 'react';
import { Card } from '../../interfaces/cards/Card';
import './BCard.css';
import { addDefaultImg } from '../../utils/addDefaultImg';
import useAuto from '../../context/AuthContext';
import { likeUnlikeCard } from '../../services/cardService';
import { errorMsg } from '../../services/feedbackService';
import { removeColon } from '../../utils/removeColon';
import useUser from '../../context/UserContext';

interface BCardProps {
  card: Card;
  likes: any;
}

const BCard: FunctionComponent<BCardProps> = ({ card, likes }) => {
  const { isLoggedIn } = useAuto();
  const { user } = useUser();
  const [isFav, setIsFav] = useState<boolean>(false);

  useEffect(() => {
    if (isLoggedIn && user) {
      setIsFav(likes.includes(user._id));
    }
  }, []);

  const handleFavCard = (cardId: string) => {
    likeUnlikeCard(cardId)
      .then(() => {
        setIsFav((prevCard) => !prevCard);
      })
      .catch((error) => errorMsg(`${removeColon(error.response.data)}`));
  };

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

      {isLoggedIn ? (
        <button
          className='fav-btn'
          onClick={() => handleFavCard(card._id as string)}
        >
          {!isFav ? (
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
