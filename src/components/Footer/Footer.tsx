import { FC } from 'react';
import Logo from '../../assets/NiceGadgetsLogo.svg';
import SliderButton from '../../assets/SliderButtonDefault.svg';
import { Link } from 'react-router-dom';
import '../../styles/logo.scss';
import './Footer.scss';

const links = [
  { name: 'github', link: 'https://github.com/' },
  { name: 'contacts', link: 'https://' },
  { name: 'rights', link: 'http://' },
];

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export const Footer: FC = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="Footer__content">
          <Link to="/" className="logo">
            <img
              src={Logo}
              alt="Nice Gadgets logo"
              className="logo__image logo--Footer"
            />
          </Link>

          <ul className="Footer__list">
            {links.map(({ name, link }) => (
              <li key={name} className="Footer__item">
                <Link to={link} className="Footer__link">
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to={window.location.pathname}
            onClick={scrollToTop}
            className="Footer__button">
            Back to top
            <div className="Footer__button__border">
              <img
                src={SliderButton}
                alt="back to top"
                className="Footer__button__image"
              />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};
