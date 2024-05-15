import Navigation from '../../../Header/Navigation/Navigation.jsx';
import Card from '../../Card/Card.jsx';
import Footer from '../../../Footer/Footer.jsx';

import {
  titleFoods,
  initialFoodsPhoto
} from '../../../../utils/constants.jsx';

function PhotoGalleryShowroom() {
  return (
    <>
      <Navigation />
      <section className="photo">
        <h2 className="photo__title">
          {titleFoods}
        </h2>
        <div className="photo__element">
          {initialFoodsPhoto.map((card) => (
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

export default PhotoGalleryShowroom;
