import Navigation from '../../../Header/Navigation/Navigation.jsx';
import Card from '../../Card/Card.jsx';
import Footer from '../../../Footer/Footer.jsx';

import {
  initialSubjectPhoto,
  titleSubject,
} from '../../../../utils/constants.jsx';

function PhotoGallerySubjectShooting () {
  return (
    <>
      <Navigation />
      <section className="photo">
        <h2 className="photo__title">
          {titleSubject}
        </h2>
        <div className="photo__element">
          {initialSubjectPhoto.map((card) => (
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

export default PhotoGallerySubjectShooting;
