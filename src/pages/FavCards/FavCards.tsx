import { FunctionComponent, use, useEffect, useState } from 'react';
import { Card } from '../../interfaces/cards/Card';
import { getAllCards } from '../../services/cardService';
import { errorMsg } from '../../services/feedbackService';
import { removeColon } from '../../utils/removeColon';
import useUser from '../../context/UserContext';
import BCard from '../../components/BCard/BCard';

interface FavCardsProps {}

const FavCards: FunctionComponent<FavCardsProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const { user } = useUser();
  const favCards: Card[] = [];

  useEffect(() => {
    getAllCards()
      .then((res) => {
        setCards(res.data);
      })
      .catch((error) => errorMsg(`${removeColon(error.response.data)}`));
  }, []);

  const filterFavCards = () => {
    if (use !== undefined) {
      for (let i = 0; i < cards.length; i++) {
        const likes: string[] = cards[i].likes as string[];

        for (let j = 0; j < likes.length; j++)
          if (likes[j] === user._id) {
            favCards.push(cards[i]);
            break;
          }
      }
    }
  };

  
  filterFavCards();

  return (
    <section className='fav section'>
      <div className='fav-container container'>
        <div className='fav-data'>
          <h2 className='section-title'>Favorite Cards</h2>
          <p className='section-subtitle'>
            Here you can see all your liked cards.
          </p>
        </div>

        {favCards.length > 0 ? (
          <div className='fav-cards grid'>
            {favCards.map((card:Card) => (
              <BCard key={card._id} card={card} likes={card.likes} userId={user._id}/>
            ))}
          </div>
        ) : (
          <p className='home-not-found'>No Results Found</p>
        )}
      </div>
    </section>
  );
};

export default FavCards;
