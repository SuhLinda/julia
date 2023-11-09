import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Main from '../Main/Main.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Price from '../Price/Price.jsx';
import Certificate from '../Certificate/Certificate.jsx';
import Popup from '../Popup/Popup.jsx';

function App() {
  const [selectedCard, setSelectedCard] = useState({});

  function handleCardClick() {
    setSelectedCard(selectedCard);
  }

  return (
    <div className="app">
      <Routes>
        <Route
          path='/'
          element={
            <Main/>
          }
        />
        <Route
          path='/portfolio'
          element={
            <Portfolio
              onCardClick={handleCardClick}
            />
          }
        />
        <Route
          path='/price'
          element={
          <Price/>
          }
        />
        <Route
          path='/certificate'
          element={
          <Certificate/>
          }
        />
      </Routes>
      <Popup card={selectedCard}/>
    </div>
  )
}

export default App;
