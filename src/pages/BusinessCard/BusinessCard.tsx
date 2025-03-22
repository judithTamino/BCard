import '../../css/card.css';
import './BusinessCard.css';

import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCardById } from '../../services/cardService';
import { errorMsg } from '../../services/feedbackService';
import { removeColon } from '../../utils/removeColon';
import { Card } from '../../interfaces/cards/Card';

interface BusinessCardProps {}

const BusinessCard: FunctionComponent<BusinessCardProps> = () => {
  const { id } = useParams();
  const [card, setCard] = useState<Card>();
  const navigate = useNavigate();

  useEffect(() => {
    getCardById(id as string)
      .then((res) => setCard(res.data))
      .catch((error) => errorMsg(`${removeColon(error.response.data)}`));
  }, []);

  return (
    <section className='section'>
      <div className='card container business-container'>
        <img src={card?.image.url} alt={card?.image.alt} className='card-img' />

        <div className='card-data'>
          <h2 className='section-title'>{card?.title}</h2>
          <p className='section-subtitle'>{card?.subtitle}</p>

          <p className='card-description'>{card?.description}</p>

          <ul className='card-list'>
            <li className='card-item'>
              <i className='ri-phone-line'></i>
              <span className='card-txt'>{card?.phone}</span>
            </li>

            <li className='card-item'>
              <i className='ri-mail-line'></i>
              <span className='card-txt'>{card?.email}</span>
            </li>

            <li className='card-item'>
              <i className='ri-window-line'></i>
              <a href={card?.web}  target='_blank' className="card-txt">website</a>
            </li>

            <li className='card-item'>
              <i className='ri-map-pin-2-line'></i>
              <span className='card-txt'>
                {`${card?.address.street} ${card?.address.houseNumber} ${card?.address.city}, ${card?.address.country}`}
              </span>
            </li>

            <li className='card-item'>
              <span className='card-txt'>{card?.bizNumber}</span>
            </li>
          </ul>
        </div>
        <div className="card-btns">
          <button className="btn" onClick={() => navigate('/')}>Back</button>
        </div>
      </div>
    </section>
  );
};

export default BusinessCard;
