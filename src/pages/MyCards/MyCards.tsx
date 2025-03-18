import '../../css/card.css';
import '../../css/btn.css';

import { FunctionComponent, useEffect, useState } from 'react';
import { Card } from '../../interfaces/cards/Card';
import { deleteCard, getAllMyCards } from '../../services/cardService';
import { errorMsg, sucessMsg } from '../../services/feedbackService';
import { addDefaultImg } from '../../utils/addDefaultImg';
import { removeColon } from '../../utils/removeColon';

interface MyCardsProps {}

const MyCards: FunctionComponent<MyCardsProps> = () => {
  const [myCards, setMyCards] = useState<Card[]>([]);
 
  useEffect(() => {
    handleGetAllMyCards();
    // getAllMyCards()
    //   .then((res) => {
    //     setMyCards(res.data);
    //   })
    //   .catch((error) => errorMsg(`${error.response.data}`));
  }, []);

  const handleDeleteCard = (cardId: any) => {
    deleteCard(cardId)
      .then(() => {
        sucessMsg('card deleted');
        handleGetAllMyCards();
      })
      .catch((error) => errorMsg(`${removeColon(error.response.data)}`));
  };

  const handleGetAllMyCards = () => {
    getAllMyCards()
    .then((res) => {
      setMyCards(res.data);
    })
    .catch((error) => errorMsg(`${error.response.data}`));
  }

  return (
    <section className='cards section'>
      <div className='container'>
        <div className='cards-data'>
          <h2 className='section-title'>My Cards</h2>
          <p className='section-subtitle'>Here you can see all your cards.</p>
        </div>
        {myCards.length > 0 ? (
          <div className='cards-container grid'>
            {myCards.map((card: Card) => (
              <article className='card' key={card._id}>
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
                      <span className='my_card-txt'>{card.phone}</span>
                    </li>

                    <li className='card-item'>
                      <i className='ri-map-pin-2-line'></i>
                      <span className='card-txt'>
                        {`${card.address.street} ${card.address.houseNumber} ${card.address.city}, ${card.address.country}`}
                      </span>
                    </li>

                    <li className='card-item'>
                      <span className='my_card-txt'>{card.bizNumber}</span>
                    </li>
                  </ul>
                </div>

                <ul className='card-actions'>
                  <li
                    className='card-action'
                    onClick={ () => handleDeleteCard(card._id)}
                  >
                    <i className='ri-delete-bin-6-line btn-delete'></i>
                  </li>

                  <li className='card-action'>
                    <i className='ri-pencil-line btn-edit'></i>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        ) : (
          <p className='home-not-found'>No Cards Found</p>
        )}
      </div>
    </section>
  );
};

export default MyCards;
