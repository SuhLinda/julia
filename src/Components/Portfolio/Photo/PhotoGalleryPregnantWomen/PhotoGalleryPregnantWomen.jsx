import Navigation from '../../../Header/Navigation/Navigation.jsx';
import Card from '../../Card/Card.jsx';
import Footer from '../../../Footer/Footer.jsx';

import {
  initialPregnantWomenPhoto,
  titlePregnantWomen
} from '../../../../utils/constants.jsx';

function PhotoGalleryPregnantWomen() {
  return (
    <>
      <Navigation />
      <section className="photo">
        <h2 className="photo__title">
          {titlePregnantWomen}
        </h2>
        <div className="photo__element">
          {initialPregnantWomenPhoto.map((card) => (
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

export default PhotoGalleryPregnantWomen;
