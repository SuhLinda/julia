import { Link } from 'react-router-dom';

function Navigation() {
  return(
    <section className="navigation">
      <a className="navigation__title" href="#about-me">PH Юлия Бабичева</a>
      <nav className="navigation__lang-nav">
        <ul className="navigation__lang-list">
          <Link to="/" className="navigation__lang-item">
            Главная
          </Link>
          <Link to="/portfolio" className="navigation__lang-item">Портфолио</Link>
          <Link to="/price" className="navigation__lang-item">Услуги и цены</Link>
          <Link to="/certificate" className="navigation__lang-item">Сертификат</Link>
        </ul>
      </nav>
    </section>
  )

}

export default Navigation;
