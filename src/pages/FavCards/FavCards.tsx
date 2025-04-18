import { FunctionComponent, useEffect, useState } from 'react';
import { Card } from '../../interfaces/cards/Card';
import { getAllCards, likeUnlikeCard } from '../../services/cardService';
import { errorMsg } from '../../services/feedbackService';
import { removeColon } from '../../utils/removeColon';
import useUser from '../../context/UserContext';
import BCard from '../../components/BCard/BCard';
import useSearch from '../../context/SearchContext';
import Spinner from '../../components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';

interface FavCardsProps {}

const FavCards: FunctionComponent<FavCardsProps> = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [cards, setCards] = useState<Card[]>([]);
  const [isFav, setIsFav] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const { searchTerm } = useSearch();

  useEffect(() => {
    getAllCards()
      .then((res) => {
        setCards(res.data);
        setLoading(false);
      })
      .catch((error) => errorMsg(`${removeColon(error.response.data)}`));
  }, [cards]);

  const handleLikeToggle = (cardId: string) => {
    const token = sessionStorage.getItem('token');
    likeUnlikeCard(cardId, token)
      .then(() => {
        setIsFav(!isFav);
      })
      .catch((error) => errorMsg(`${removeColon(error.response.data)}`));
  };

  const filterCards = cards.filter((card) =>
    card.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const handleCardOnClick = (cardId:string) => {
    navigate(`/${cardId}`);
  }

  return (
    <section className='fav section'>
      <div className='fav-container container'>
        <div className='fav-data'>
          <h2 className='section-title'>Favorite Cards</h2>
          <p className='section-subtitle'>
            Here you can see all your liked cards.
          </p>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {filterCards.filter((card: Card) =>
              card.likes?.some((like) => like === user._id)
            ).length > 0 ? (
              <div className='cards-container grid'>
                {filterCards
                  .filter((card: Card) =>
                    card.likes?.some((like) => like === user._id)
                  )
                  .map((card: Card) => (
                    <BCard
                      key={card._id}
                      card={card}
                      likes={card.likes}
                      currentUserId={user._id}
                      onLikeToggle={handleLikeToggle}
                      cardClik={handleCardOnClick}
                    />
                  ))}
              </div>
            ) : (
              <p className='home-not-found'>No Fav Found</p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default FavCards;
