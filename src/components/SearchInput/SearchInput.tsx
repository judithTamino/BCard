import { FunctionComponent } from 'react';
import './SearchInput.css'
import useSearch from '../../context/SearchContext';

interface SearchInputProps {}

const SearchInput: FunctionComponent<SearchInputProps> = () => {
  const {setSearchTerm} = useSearch(); 
  return (
    <div className='search-container container'>
      <div className='search-form'>
        <input type='search' className='serch-input'  
        onChange={(e) => setSearchTerm(e.target.value)} placeholder='search'/>
      </div>
    </div>
  );
};

export default SearchInput;
