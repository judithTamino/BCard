import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { Card } from '../../interfaces/cards/Card';
import { getAllCards } from '../../services/cardService';
import BCard from '../BCard/BCard';
import './Home.css';
import ReactPaginate from 'react-paginate';
import { SearchContext } from '../../context/SearchContext';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage] = useState<number>(3);
  const [searchData] = useContext(SearchContext);

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
      .includes(searchData?.toLocaleLowerCase() as string)
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
          <div className='home-cards grid'>
            {currentCards.map((card: Card) => (
              <BCard key={card._id} card={card} />
            ))}
          </div>
        ) : (
          <p className='home-not-found'>No Results Found</p>
        )}

        <ReactPaginate
          previousLabel={<i className='ri-arrow-left-wide-line'></i>}
          previousClassName='page-prev'
          nextLabel={<i className='ri-arrow-right-wide-line'></i>}
          nextClassName='page-next'
          breakLabel={'...'}
          breakClassName='page-break'
          pageCount={Math.ceil(filterCards.length / cardsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'page-active'}
        />
      </div>
    </section>
  );
};

export default Home;
