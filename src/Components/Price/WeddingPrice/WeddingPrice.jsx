import Navigation from '../../Header/Navigation/Navigation.jsx';
import Footer from '../../Footer/Footer.jsx';

import {
  titleWeddingPrice,
  titleWeddingPrice1,
  titleWeddingPrice2,
  titleWeddingPrice3,
  titleWeddingPrice4,
  titleWeddingPrice5,
  titleWeddingPrice6,
  weddingText,
  weddingText1,
  weddingText2,
  weddingText3,
  weddingText4,
  weddingText5,
  weddingText6,
  weddingText7,
  weddingText8,
  weddingText9,
  weddingText10,
  weddingText11,
  weddingText12,
  weddingText13,
  weddingText14,
  weddingText15,
  weddingText16,
  weddingText17,
  weddingText18,
  weddingText19,
  weddingText20,
  weddingText21,
  weddingText22,
  weddingText23,
  weddingText24,
  weddingText25,
  weddingText26,
  weddingText27,
  weddingText28,
  weddingText29,
  weddingPrice,
  weddingPrice1,
  weddingPrice2,
  weddingPrice3,
} from '../../../utils/constants.jsx';

function WeddingPrice() {
  return (
    <>
      <Navigation />
      <section className="wedding-price">
        <h2 className="price__title">
          {titleWeddingPrice}
        </h2>
        <p className="profile__info_text">
          {weddingText}
        </p>
        <p className="profile__info_text">
          {weddingText1}
        </p>
        <p className="profile__info_text">
          {weddingText2}
        </p>
        <div className="price__item">
          <p className="price__title">
            {titleWeddingPrice1}
          </p>
          <ul className="price__list">
            <li className="price__text">
              {weddingText3}
            </li>
            <li className="price__text">
              {weddingText4}
            </li>
            <li className="price__text">
              {weddingText5}
            </li>
            <li className="price__text">
              {weddingText6}
            </li>
            <li className="price__text">
              {weddingText7}
            </li>
            <li className="price__text">
              {weddingText8}
            </li>
          </ul>
          <p className="price__value">
            {weddingPrice}
          </p>
        </div>
        <div className="price__item">
          <p className="price__title">
            {titleWeddingPrice2}
          </p>
          <ul className="price__list">
            <li className="price__text">
              {weddingText9}
            </li>
            <li className="price__text">
              {weddingText4}
            </li>
            <li className="price__text">
              {weddingText5}
            </li>
            <li className="price__text">
              {weddingText10}
            </li>
            <li className="price__text">
              {weddingText11}
            </li>
            <li className="price__text">
              {weddingText12}
            </li>
          </ul>
          <p className="price__value">
            {weddingPrice1}
          </p>
        </div>
        <div className="price__item">
          <p className="price__title">
            {titleWeddingPrice3}
          </p>
          <ul className="price__list">
            <li className="price__text">
              {weddingText13}
            </li>
            <li className="price__text">
              {weddingText4}
            </li>
            <li className="price__text">
              {weddingText5}
            </li>
            <li className="price__text">
              {weddingText14}
            </li>
            <li className="price__text">
              {weddingText15}
            </li>
            <li className="price__text">
              {weddingText16}
            </li>
          </ul>
          <p className="price__value">
            {weddingPrice2}
          </p>
        </div>
        <div className="price__item">
          <p className="price__title">
            {titleWeddingPrice4}
          </p>
          <ul className="price__list">
            <li className="price__text">
              {weddingText17}
            </li>
            <li className="price__text">
              {weddingText4}
            </li>
            <li className="price__text">
              {weddingText5}
            </li>
            <li className="price__text">
              {weddingText18}
            </li>
            <li className="price__text">
              {weddingText19}
            </li>
            <li className="price__text">
              {weddingText20}
            </li>
          </ul>
          <p className="price__text">
            {weddingText21}
          </p>
          <p className="price__value">
            {weddingPrice3}
          </p>
        </div>
        <p className="price__title">
          {titleWeddingPrice5}
        </p>
        <div className="price__item">
          <ul className="price__list">
            <li className="price__text">
              {weddingText22}
            </li>
            <li className="price__text">
              {weddingText23}
            </li>
            <li className="price__text">
              {weddingText24}
            </li>
            <li className="price__text">
              {weddingText25}
            </li>
          </ul>
        </div>
        <p className="price__title">
          {titleWeddingPrice6}
        </p>
        <div className="price__item">
          <ul className="price__list">
            <li className="price__text">
              {weddingText26}
            </li>
            <li className="price__text">
              {weddingText27}
            </li>
            <li className="price__text">
              {weddingText28}
            </li>
          </ul>
          <p className="price__text">
            {weddingText29}
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default WeddingPrice;
