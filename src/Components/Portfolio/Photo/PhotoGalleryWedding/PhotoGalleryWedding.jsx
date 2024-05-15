import Navigation from '../../../Header/Navigation/Navigation.jsx';
import Card from '../../Card/Card.jsx';
import Footer from '../../../Footer/Footer.jsx';

import {
  initialWeddingPhoto,
  titleWedding,
} from '../../../../utils/constants';

function PhotoGalleryWedding() {
  return (
    <>
      <Navigation />
      <section className="photo">
        <h2 className="photo__title">
          {titleWedding}
        </h2>
        <div className="photo__element">
          {initialWeddingPhoto.map((card) => (
            <Card
              card={card}
              key={card.id}
              src={card.image}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PhotoGalleryWedding;
