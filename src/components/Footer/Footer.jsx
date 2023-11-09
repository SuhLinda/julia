import footerInstagram from '../../images/footer__instagram.svg';
import footerFB from '../../images/footer__fb.svg';
import footerVK from '../../images/footer__vk.svg';

function Footer() {
  return(
    <footer className="footer">
      <h3 className="footer__title">© Фотограф Юлия Бабичева 2023г</h3>
      <nav>
        <h3 className="footer__title">Контакты</h3>
        <ul className="footer__social-network">
          <li>
            <a className="footer__social-network_link">
              <img
                className="footer__social-network_img"
                src={footerInstagram}
                alt="Instagram"
              />Instagram
            </a>
          </li>
          <li>
            <a className="footer__social-network_link">
              <img
                className="footer__social-network_img"
                src={footerFB}
                alt="Facebook"
              />Facebook
            </a>
          </li>
          <li>
            <a className="footer__social-network_link">
              <img
                className="footer__social-network_img"
                src={footerVK}
                alt="VK"
              />Vkontakte
            </a>
          </li>
          <li>
            <a className="footer__social-network_link">
              +7 936 938 74 84
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
