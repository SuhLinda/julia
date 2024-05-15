import { Link } from 'react-router-dom';

import {
  mainLink,
  portfolioLink,
  priceLink,
  weddingPriceLink,
  certificateLink,
  navigationText,
  navigationText1,
  navigationText2,
  navigationText3,
  navigationText4,
} from '../../../utils/constants.jsx';

function Navigation() {
  return(
    <section className="navigation">
      <Link
        to={mainLink}
        className="navigation__title">
        {navigationText}
      </Link>
      <nav className="navigation__lang-nav">
        <ul className="navigation__lang-list">
          <Link
            to={portfolioLink}
            className="navigation__lang-item">
            {navigationText1}
          </Link>
          <Link
            to={priceLink}
            className="navigation__lang-item">
            {navigationText2}
          </Link>
          <Link
            to={weddingPriceLink}
            className="navigation__lang-item">
            {navigationText3}
          </Link>
          <Link
            to={certificateLink}
            className="navigation__lang-item">
            {navigationText4}
          </Link>
        </ul>
      </nav>
    </section>
  )
}

export default Navigation;
