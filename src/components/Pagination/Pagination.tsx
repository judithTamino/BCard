import { FunctionComponent } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

interface PaginationProps {
  cardsLenght: number;
  cardsPerPage: number;
  handlePageChange: (data: any) => void;
}

const Pagination: FunctionComponent<PaginationProps> = ({cardsLenght, cardsPerPage, handlePageChange}) => {
  return (
    <ReactPaginate
      previousLabel={<i className='ri-arrow-left-wide-line'></i>}
      previousClassName='page-prev'
      nextLabel={<i className='ri-arrow-right-wide-line'></i>}
      nextClassName='page-next'
      breakLabel={'...'}
      breakClassName='page-break'
      pageCount={Math.ceil(cardsLenght / cardsPerPage)}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageChange}
      containerClassName={'pagination'}
      activeClassName={'page-active'}
    />
  );
};

export default Pagination;
