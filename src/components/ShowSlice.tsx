import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../app/store';

interface Show {
  id: number;
  name: string;
  summary: string;
}

interface SearchResults {
  show: Show;
}

interface ShowsState {
  searchResults: SearchResults[];
  showDetails: Show;
}

const initialState: ShowsState = {
  searchResults: [],
  showDetails: {} as Show,
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setSearchResults(state, action: PayloadAction<SearchResults[]>) {
      state.searchResults = action.payload;
    },
    setShowDetails(state, action: PayloadAction<Show>) {
      state.showDetails = action.payload;
    },
  },
});

export const { setSearchResults, setShowDetails } = showsSlice.actions;

export default showsSlice.reducer;

export const fetchSearchResults = (query: string): AppThunk => async (dispatch) => {
  const response = await fetch(`http://api.tvmaze.com/search/shows?q=${query}`);
  const data = await response.json();
  dispatch({ type: setSearchResults.type, payload: data });
};

export const fetchShowDetails = (id: string): AppThunk => async (dispatch) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await response.json();
  dispatch({ type: setShowDetails.type, payload: data });
};