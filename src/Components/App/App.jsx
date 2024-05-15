import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Main from '../Main/Main.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Price from '../Price/Price.jsx';
import WeddingPrice from '../Price/WeddingPrice/WeddingPrice.jsx';
import Certificate from '../Certificate/Certificate.jsx';
import PhotoGalleryWedding from '../Portfolio/Photo/PhotoGalleryWedding/PhotoGalleryWedding.jsx';
import PhotoGalleryStreet from '../Portfolio/Photo/PhotoGalleryStreet/PhotoGalleryStreet.jsx';
import PhotoGalleryStudio from '../Portfolio/Photo/PhotoGalleryStudio/PhotoGalleryStudio.jsx';
import PhotoGalleryPregnantWomen from '../Portfolio/Photo/PhotoGalleryPregnantWomen/PhotoGalleryPregnantWomen.jsx';
import PhotoGallerySubjectShooting from '../Portfolio/Photo/PhotoGallerySubjectShooting/PhotoGallerySubjectShooting.jsx';
import PhotoGalleryShowroom from '../Portfolio/Photo/PhotoGalleryShowroom/PhotoGalleryShowroom.jsx';
import PhotoGalleryFoods from '../Portfolio/Photo/PhotoGalleryFoods/PhotoGalleryFoods.jsx';

import {
  certificateLink,
  foodsLink,
  mainLink,
  portfolioLink,
  pregnantWomenLink,
  priceLink,
  showroomLink,
  streetLink,
  studioLink,
  subjectLink,
  weddingLink,
  weddingPriceLink,

} from '../../utils/constants.jsx';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route
          path={mainLink}
          element={
            <Main />
          }
        />
        <Route
          path={portfolioLink}
          element={
            <Portfolio />
          }
        />
        <Route
          path={weddingLink}
          element={
            <PhotoGalleryWedding />
          }
        />
        <Route
          path={streetLink}
          element={
            <PhotoGalleryStreet />
          }
        />
        <Route
          path={studioLink}
          element={
            <PhotoGalleryStudio />
          }
        />
        <Route
          path={pregnantWomenLink}
          element={
            <PhotoGalleryPregnantWomen />
          }
        />
        <Route
          path={subjectLink}
          element={
            <PhotoGallerySubjectShooting />
          }
        />
        <Route
          path={showroomLink}
          element={
            <PhotoGalleryShowroom />
          }
        />
        <Route
          path={foodsLink}
          element={
            <PhotoGalleryFoods />
          }
        />
        <Route
          path={priceLink}
          element={
            <Price />
          }
        />
        <Route
          path={weddingPriceLink}
          element={
            <WeddingPrice />
          }
        />
        <Route
          path={certificateLink}
          element={
            <Certificate />
          }
        />
      </ Routes>
    </div>
  )
}

export default App;
