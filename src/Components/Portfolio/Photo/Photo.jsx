import { Link } from 'react-router-dom';

import Card from '../Card/Card.jsx';

import {
  initialCardsWedding,
  initialCardsStreet,
  initialCardsStudio,
  initialPregnantWomen,
  initialCardsSubject,
  initialCardsShowroom,
  initialPhotoFoods,
  titleFoods,
  titlePregnantWomen,
  titleShowrooms,
  titleStreet,
  titleStudio,
  titleSubject,
  titleWedding,
  gallery,
  weddingLink,
  streetLink,
  studioLink,
  pregnantWomenLink,
  subjectLink,
  showroomLink,
  foodsLink,
} from '../../../utils/constants';

function Photo({ card }) {

  return(
    <section className="photo">
      <h2 className="photo__title">
        {titleWedding}
      </h2>
      <div className="photo__element">
        {initialCardsWedding.map((card) => (
          <Card
            card={card}
            key={card.id}
            src={card.image}
          />
        ))}
      </div>
      <Link
        to={weddingLink}
        className="photo__link"
      >
        {gallery}
      </Link>
      <h2 className="photo__title">
        {titleStreet}
      </h2>
      <div className="photo__element">
        {initialCardsStreet.map((card) => (
          <Card
            card={card}
            key={card.id}
            src={card.image}
          />
        ))}
      </div>
      <Link
        to={streetLink}
        className="photo__link"
      >
        {gallery}
      </Link>
      <h2 className="photo__title">
        {titleStudio}
      </h2>
      <div className="photo__element">
        {initialCardsStudio.map((card) => (
          <Card
            card={card}
            key={card.id}
            src={card.image}
          />
        ))}
      </div>
      <Link
        to={studioLink}
        className="photo__link"
      >
        {gallery}
      </Link>
      <h2 className="photo__title">
        {titlePregnantWomen}
      </h2>
      <div className="photo__element">
        {initialPregnantWomen.map((card) => (
          <Card
            card={card}
            key={card.id}
            src={card.image}
          />
        ))}
      </div>
      <Link
        to={pregnantWomenLink}
        className="photo__link"
      >
        {gallery}
      </Link>
      <h2 className="photo__title">
        {titleSubject}
      </h2>
      <div className="photo__element">
        {initialCardsSubject.map((card) => (
          <Card
            card={card}
            key={card.id}
            src={card.image}
          />
        ))}
      </div>
      <Link
        to={subjectLink}
        className="photo__link"
      >
        {gallery}
      </Link>
      <h2 className="photo__title">
        {titleShowrooms}
      </h2>
      <div className="photo__element">
        {initialCardsShowroom.map((card) => (
          <Card
            card={card}
            key={card.id}
            src={card.image}
          />
        ))}
      </div>
      <Link
        to={showroomLink}
        className="photo__link"
      >
        {gallery}
      </Link>
      <h2 className="photo__title">
        {titleFoods}
      </h2>
      <div className="photo__element">
        {initialPhotoFoods.map((card) => (
          <Card
            card={card}
            key={card.id}
            src={card.image}
          />
        ))}
      </div>
      <Link
        to={foodsLink}
        className="photo__link"
      >
        {gallery}
      </Link>
    </section>
  )
}

export default Photo;
