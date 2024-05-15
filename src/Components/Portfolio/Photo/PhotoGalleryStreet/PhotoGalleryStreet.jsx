import Navigation from '../../../Header/Navigation/Navigation.jsx';
import Card from '../../Card/Card.jsx';
import Footer from '../../../Footer/Footer.jsx';

import {
  initialStreetPhoto,
  titleStreet,
} from '../../../../utils/constants.jsx';

function PhotoGalleryStreet() {
  return (
    <>
      <Navigation />
      <section className="photo">
        <h2 className="photo__title">
          {titleStreet}
        </h2>
        <div className="photo__element">
        {initialStreetPhoto.map((card) => (
            <Card
              card={card}
              key={card.id}
              src={card.image}
            />
          ))}
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default PhotoGalleryStreet;
