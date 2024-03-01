import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { fetchShowDetails } from './ShowSlice';

interface RouteParams {
  id: string;
}

const ShowPage: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const dispatch = useDispatch();

  const showDetails = useSelector((state: RootState) => state.shows.showDetails);

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchShowDetails(id));
    };
    fetchData();
  }, [dispatch, id]);

  return (
    <div>
      <h2>{showDetails.name}</h2>
      <p>{showDetails.summary}</p>
    </div>
  );
};export default ShowPage;