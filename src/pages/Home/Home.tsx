import { FunctionComponent, use, useEffect, useState } from 'react';
import { Card } from '../../interfaces/cards/Card';
import { getAllCards } from '../../services/cardService';
import BCard from '../../components/BCard/BCard';
import './Home.css';
import useSearch from '../../context/SearchContext';
import Pagination from '../../components/Pagination/Pagination';
import useUser from '../../context/UserContext';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage] = useState<number>(4);
  const { searchTerm } = useSearch();
  const { user } = useUser();

  useEffect(() => {
    getAllCards()
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

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
            <div className='home-cards grid'>
              {currentCards.map((card: Card) => (
                <BCard key={card._id} card={card} likes={card.likes} />
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
    </section>
  );
};

export default Home;
