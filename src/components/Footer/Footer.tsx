import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/icons/Logo.svg';
import SliderButton from '../../assets/icons/arrow-up-default.svg';
import { ScrollToTop } from '../../utils/ScrollToTop';
import { links } from '../../utils/constants/links';

import '../../styles/logo.scss';
import './Footer.scss';

export const Footer: FC = () => (
  <footer className="Footer">
    <div className="container">
      <div className="Footer__content">
        <Link to="/" className="logo">
          <img
            className="logo__image logo--Footer"
            src={Logo}
            alt="Nice Gadgets logo"
          />
        </Link>

        <ul className="Footer__list">
          {links.map(({ name, link }) => (
            <li key={name} className="Footer__item">
              <Link className="Footer__link" to={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          className="Footer__button"
          to={window.location.pathname}
          onClick={ScrollToTop}
        >
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
