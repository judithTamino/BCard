import { FunctionComponent, useEffect, useState } from 'react';
import { Card } from '../../interfaces/cards/Card';
import { getAllCards } from '../../services/cardService';
import BCard from '../BCard/BCard';
import "./Home.css";
import Pagination from '../Pagination/Pagination';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage, setCardsPerPage] = useState<number>(10);

  useEffect(() => {
    getAllCards()
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const lastCardIndex:number = currentPage * cardsPerPage;
  const firsCardIndex:number = lastCardIndex - cardsPerPage;
  const currentCards: Card[] = cards.slice(firsCardIndex, lastCardIndex);
  
  return (
    <section className='home section'>
      <div className='home-container container'>
        <div className='home-data'>
          <h1 className='home-title'>Cards Page</h1>
          <p className='home-description'>
            Here you can find business cards from all categories.
          </p>
        </div>

        <div className='home-cards grid'>
          {currentCards.map((card: Card) => (
            <BCard key={card._id} card={card} />
          ))}
        </div>

        <Pagination totalCards={cards.length} cardsPerPage={cardsPerPage} />
      </div>
    </section>
  );
};

export default Home;
