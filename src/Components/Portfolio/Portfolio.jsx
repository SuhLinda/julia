import Navigation from '../Header/Navigation/Navigation.jsx';
import Photo from './Photo/Photo.jsx';
import Footer from '../Footer/Footer.jsx';

function Portfolio({ card }) {

  return (
    <>
      <Navigation />
      <Photo
        card={card}
      />
      <Footer />
    </>
  )
}

export default Portfolio;
