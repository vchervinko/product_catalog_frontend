import cn from 'classnames';
import { useState, FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/icons/Logo.svg';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import './Header.scss';

export const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpened((prevState) => !prevState);
  };

  return (
    <div className="page">
      <div className="page__content">
        <header className="header page__header">
          <div className="header__links">
            <div className="header__logo">
              <Link title="Nice Gadgets - Home Page" className="logo" to="/">
                <img
                  src={logo}
                  className="logo__image"
                  alt="NiceGadgets logo"
                />
              </Link>
            </div>
            <div className="header__nav">
              <HeaderNav />
            </div>
          </div>

          <div className="header__menu">
            <button
              title="Menu"
              type="button"
              className="header__menu-opener"
              onClick={handleMenuToggle}
            >
              <div
                className={cn('header__menu-icon', {
                  'header__menu-icon--closed': !isMenuOpened,
                  'header__menu-icon--opened': isMenuOpened,
                })}
              />
            </button>
          </div>

          <div className="header__icons">
            <div className="icon-block">
              <Link
                title="Favourites"
                className={cn('icon-block__link', {
                  'icon-block__link--active': location.pathname
                  === '/favourites',
                })}
                to="favourites"
              >
                <div className="icon-block__icon icon-block__icon--Favourites">
                </div>
              </Link>
            </div>
            <div className="icon-block">
              <Link
                title="Cart"
                className={cn('icon-block__link', {
                  'icon-block__link--active': location.pathname === '/cart',
                })}
                to="cart"
              >
                <div className="icon-block__icon icon-block__icon--Cart">
                </div>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
