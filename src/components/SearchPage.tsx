import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch, RootState} from '../app/store';
import { fetchSearchResults } from './ShowSlice';
import { useHistory } from 'react-router-dom';

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();

  const searchResults = useSelector((state: RootState) => state.shows.searchResults);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    fetchSearchResults(value)(dispatch);
  };

  const handleShowClick = (id: number) => {
    history.push(`/shows/${id}`);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      <div>
        {searchResults.map(result => (
          <div key={result.show.id} onClick={() => handleShowClick(result.show.id)}>
            {result.show.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;