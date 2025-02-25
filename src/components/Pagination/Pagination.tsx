import { FunctionComponent } from "react";

interface PaginationProps {
  totalCards:number,
  cardsPerPage: number
}
 
const Pagination: FunctionComponent<PaginationProps> = ({totalCards, cardsPerPage}) => {
  const pages: number[] = [];
  let index:number = 1;

  const showPageNumber = (index:number) => {
    for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
      pages.push(i);
    }
  }


  return (
    <div className="pagination-container container section">
      {pages.map((page, index) => (
        <button key={index}>{page}</button>
      ))}
    </div>
  );
}
 
export default Pagination;