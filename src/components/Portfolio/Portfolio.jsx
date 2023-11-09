import Navigation from '../Navigation/Navigation.jsx';
import Wedding from './Wedding/Wedding.jsx';
import Street from './Street/Street.jsx';
import Studio from './Studio/Studio.jsx';
import Subject from './Subject/Subject.jsx';
import Showroom from './Showroom/Showroom.jsx';
import Footer from '../Footer/Footer.jsx';

function Portfolio({onCardClick}) {
  return (
    <>
      <Navigation/>
      <Wedding onCardClick={onCardClick}/>
      <Street/>
      <Studio/>
      <Subject/>
      <Showroom/>
      <Footer/>
    </>
  )
}

export default Portfolio;
