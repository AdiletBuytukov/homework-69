import React from 'react';
import {Routes, Route} from 'react-router-dom';
import SearchPage from './components/SearchPage';
import ShowPage from './components/ShowPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={SearchPage}/>
      <Route path="/show/:id" element={ShowPage}/>
    </Routes>
  );
};

export default App;