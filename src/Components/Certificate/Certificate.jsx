import { Link } from 'react-router-dom';

import Navigation from '../Header/Navigation/Navigation.jsx';

import Footer from '../Footer/Footer.jsx';

import {
  certificate1,
  certificate2,
  titleCertificate,
  whatsAppLink,
  certificateText,
  certificateText1,
  certificateText2,
  certificateText3,
  certificateText4,
  certificateText5,
} from '../../utils/constants.jsx';

function Certificate() {
  return(
    <>
      <Navigation />
      <section className="certificate">
        <h2 className="certificate__title">
          {titleCertificate}
        </h2>
        <div className="certificate__element">
          <img
            className="card_img"
            src={certificate1}
            alt="certificate1"
          />
          <img
            className="card_img"
            src={certificate2}
            alt="certificate2"
          />
        </div>
        <p className="certificate__text">
          {certificateText}
        </p>
        <p className="certificate__text">
          {certificateText1}
        </p>
        <p className="certificate__text">
          {certificateText2}
        </p>
        <p className="certificate__text">
          {certificateText3}
        </p>
        <p className="certificate__text">
          {certificateText4}
        </p>
        <Link
          to={whatsAppLink}
          className="certificate__link"
        >
          {certificateText5}
        </Link>
      </section>
      <Footer/>
    </>
  )
}

export default Certificate;
