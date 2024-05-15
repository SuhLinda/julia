import Navigation from '../../../Header/Navigation/Navigation.jsx';
import Card from '../../Card/Card.jsx';
import Footer from '../../../Footer/Footer.jsx';

import {
  initialStudioPhoto,
  titleStudio,
} from '../../../../utils/constants.jsx';

function PhotoGalleryStudio() {
  return (
    <>
      <Navigation />
      <section className="photo">
        <h2 className="photo__title">
          {titleStudio}
        </h2>
        <div className="photo__element">
          {initialStudioPhoto.map((card) => (
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

export default PhotoGalleryStudio;
