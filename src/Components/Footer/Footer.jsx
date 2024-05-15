import { Link } from 'react-router-dom';

import {
  footerInstagram,
  footerVK,
  footerWA,
  instLink,
  vkLink,
  whatsAppLink,
  footerText,
  footerText1,
  footerText2,
  footerText3,
  footerText4,
  footerText5,
} from '../../utils/constants.jsx';

function Footer() {
  return(
    <footer className="footer">
      <h3 className="footer__title">
        {footerText}
      </h3>
      <nav>
        <h3 className="footer__title">
          {footerText1}
        </h3>
        <ul className="footer__social-network">
          <li>
            <Link
              to={instLink}
              className="footer__social-network_link">
              <img
                className="footer__social-network_img"
                src={footerInstagram}
                alt="Instagram"
              />
              {footerText2}
            </Link>
          </li>
          <li>
            <Link
              to={vkLink}
              className="footer__social-network_link">
              <img
                className="footer__social-network_img"
                src={footerVK}
                alt="VK"
              />
              {footerText3}
            </Link>
          </li>
          <li>
            <Link
              to={whatsAppLink}
              className="footer__social-network_link">
              <img
                className="footer__social-network_img"
                src={footerWA}
                alt="VK"
              />
              {footerText5}
            </Link>
          </li>
          <li>
            <a className="footer__social-network_link">
              {footerText4}
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
