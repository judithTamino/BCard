import '../../css/btn.css';

import { FunctionComponent, useEffect, useState } from 'react';
import { Card } from '../../interfaces/cards/Card';
import { getAllCards, likeUnlikeCard } from '../../services/cardService';
import BCard from '../../components/BCard/BCard';
import useSearch from '../../context/SearchContext';
import Pagination from '../../components/Pagination/Pagination';
import { errorMsg } from '../../services/feedbackService';
import { removeColon } from '../../utils/removeColon';
import useUser from '../../context/UserContext';
import useAuto from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage] = useState<number>(3);
  const [isFav, setIsFav] = useState<boolean>(false);
  const { searchTerm } = useSearch();
  const { user }  = useUser();
  const { isLoggedIn } = useAuto();
  const navigate = useNavigate();
 
  useEffect(() => {
    getAllCards()
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => console.error(error));
  }, [isFav]);

  const filterCards = cards.filter((card) =>
    card.title
      .toLocaleLowerCase()
      .includes(searchTerm?.toLocaleLowerCase() as string)
  );
  const lastCardIndex: number = currentPage * cardsPerPage;
  const firsCardIndex: number = lastCardIndex - cardsPerPage;
  const currentCards: Card[] = filterCards.slice(firsCardIndex, lastCardIndex);

  const handlePageChange = (data: any) => {
    setCurrentPage(data.selected + 1);
    window.scrollTo(0, 0);
  };

  const handleLikeToggle = (cardId:string) => {
    const token = sessionStorage.getItem('token');
    likeUnlikeCard(cardId, token)
    .then(() => {
      setIsFav(!isFav);
    })
    .catch((error) => errorMsg(`${removeColon(error.response.data)}`));
  }

  return (
    <section className='home section'>
      <div className='home-container container'>
        <div className='home-data'>
          <h1 className='section-title'>Cards Page</h1>
          <p className='section-subtitle'>
            Here you can find business cards from all categories.
          </p>
        </div>
        {filterCards.length > 0 ? (
          <>
            <div className='cards-container grid'>
              {currentCards.map((card: Card) => (
                <BCard key={card._id} card={card} likes={card.likes} currentUserId={user? user._id : '0'} onLikeToggle={handleLikeToggle}/>
              ))}
            </div>
            
            <Pagination
              cardsLenght={filterCards.length}
              cardsPerPage={cardsPerPage}
              handlePageChange={handlePageChange}
            />
          </>
        ) : (
          <p className='home-not-found'>No Results Found</p>
        )}
      </div>

      {isLoggedIn && user ? (
        <>
        {user.isBusiness ? (
          <button className="btn-icon btn-create">
            <i className="ri-add-line" onClick={() => navigate('/createCard')}></i>
          </button>
        )
        : null}
        </>
      )
      : null}
    </section>
  );
};

export default Home;
