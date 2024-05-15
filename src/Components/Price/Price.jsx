import Navigation from '../Header/Navigation/Navigation.jsx';
import Footer from '../Footer/Footer.jsx';

import {
  titlePrice,
  titlePrice1,
  titlePrice2,
  titlePrice3,
  price,
  price1,
  price2,
  price3,
  priceText,
  priceText1,
  priceText2,
  priceText3,
  priceText4,
  priceText5,
  priceText6,
  priceText7,
  priceText8,
  priceText9,
  priceText10,
  priceText11,
  priceText12,
  priceText13,
  priceText14,
  priceText15,
  priceText16,
  priceText17,
  priceText18,
  priceText19,
  priceText20,
  priceText21,
  priceText22,
  priceText23,
  priceText24,
  priceText25,
} from '../../utils/constants.jsx';

function Price() {
  return (
    <>
    <Navigation />
      <section className="price">
        <h2 className="price__title">
          {titlePrice}
        </h2>
        <div className="price__item">
          <p className="price__title">
            {titlePrice1}
          </p>
          <ul className="price__list">
            {priceText}
            <li className="price__text">
              {priceText1}
            </li>
            <li className="price__text">
              {priceText2}
            </li>
            <li className="price__text">
              {priceText3}
            </li>
            <li className="price__text">
              {priceText4}
            </li>
            <li className="price__text">
              {priceText5}
            </li>
            <li className="price__text">
              {priceText6}
            </li>
          </ul>
          <p className="price__text">
            {priceText7}
          </p>
          <p className="price__value">
            {price}
          </p>
        </div>
        <div className="price__item">
          <p className="price__title">
            {titlePrice2}
          </p>
          <ul className="price__list">
            {priceText8}
            <li className="price__text">
              {priceText9}
            </li>
            <li className="price__text">
              {priceText10}
            </li>
            <li className="price__text">
              {priceText11}
            </li>
            <li className="price__text">
              {priceText12}
            </li>
            <li className="price__text">
              {priceText13}
            </li>
            <li className="price__text">
              {priceText14}
            </li>
          </ul>
          <p className="price__text">
            {priceText7}
          </p>
          <p className="price__value">
            {price1}
          </p>
        </div>
        <div className="price__item">
          <p className="price__title">
            {titlePrice3}
          </p>
          <ul className="price__list">
            {priceText15}
            <p className="price__text">
              {priceText16}
            </p>
            <li className="price__text">
              {priceText17}
            </li>
            <li className="price__text">
              {priceText18}
            </li>
            <li className="price__text">
              {priceText19}
            </li>
            <li className="price__text">
              {priceText20}
            </li>
            <li className="price__text">
              {priceText21}
            </li>
            <li className="price__text">
              {priceText22}
            </li>
            <li className="price__text">
              {priceText23}
            </li>
          </ul>
          <p className="price__text">
            {priceText24}
          </p>
          <p className="price__text">
            {priceText25}
          </p>
          <p className="price__text">
            {priceText7}
          </p>
          <p className="price__value">
            {price2}
          </p>
        </div>
        <p className="price__text">
          {price3}
        </p>
      </section>
      <Footer/>
    </>
  )
}

export default Price;
