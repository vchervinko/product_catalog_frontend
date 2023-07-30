import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <>
      <header id="back-to-top">Header</header>

      <Outlet />

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <a href="#" className="logo">
              <img
                src="src\assets\NiceGadgetsLogo.svg"
                alt="Nice Gadgets logo"
                className="logo__image logo--footer"
              />
            </a>

            <ul className="footer__list">
              <li className="footer__item">
                <a href="#github" className="footer__link">
                  github
                </a>
              </li>

              <li className="footer__item">
                <a href="#contacts" className="footer__link">
                  contacts
                </a>
              </li>

              <li className="footer__item">
                <a href="#rights" className="footer__link">
                  rights
                </a>
              </li>
            </ul>

            <a href="#back-to-top" className="footer__button">
              Back to top
              <div>
                <img
                  src="src\assets\SliderButtonDefault.svg"
                  alt="back to top"
                  className="footer__button__image"
                />
              </div>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
