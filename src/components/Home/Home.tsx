import { FunctionComponent, useEffect, useState } from 'react';
import { Card } from '../../interfaces/cards/Card';
import { getAllCards } from '../../services/cardService';
import BCard from '../BCard/BCard';
import './Home.css';
import ReactPaginate from 'react-paginate';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage] = useState<number>(3);

  useEffect(() => {
    getAllCards()
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  const lastCardIndex: number = currentPage * cardsPerPage;
  const firsCardIndex: number = lastCardIndex - cardsPerPage;
  const currentCards: Card[] = cards.slice(firsCardIndex, lastCardIndex);

  const handlePageChange = (data:any) => {
    setCurrentPage(data.selected);
    window.scrollTo(0,0);
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

        <div className='home-cards grid'>
          {currentCards.map((card: Card) => (
            <BCard key={card._id} card={card} />
          ))}
        </div>
        <ReactPaginate
          previousLabel={
            (<i className="ri-arrow-left-wide-line"></i>)
          }
          previousClassName='page-prev'
          nextLabel={
            (<i className="ri-arrow-right-wide-line"></i>)
          }
          nextClassName='page-next'
          breakLabel={'...'}
          breakClassName='page-break'
          pageCount={Math.ceil(cards.length / cardsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"page-active"}
        />
      </div>
    </section>
  );
};

export default Home;
