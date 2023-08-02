import classNames from 'classnames';
import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';
import '../../styles/icon.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';

export const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const { likedProductsCount, cartProductsCount } = useProductsContext();

  const toggleMenu = (status?: boolean) => {
    if (status) {
      setIsMenuOpened(status);

      return;
    }

    setIsMenuOpened((currentState) => !currentState);
  };

  const cartFontSize = cartProductsCount > 9 ? { fontSize: '0.60rem' } : {};
  const likedFontSize = likedProductsCount > 9 ? { fontSize: '0.60rem' } : {};

  return (
    <>
      <header className="Header">
        <div className="Header__branding">
          <div className="Header__logo">
            <Logo height={28} />
          </div>

          <div className="Header__nav">
            <Navigation />
          </div>
        </div>

        <div className="Header__menu">
          <button
            className="Header__toggler"
            type="button"
            onClick={() => toggleMenu()}
          >
            <div
              className={classNames('Header__menu-icon', {
                'Header__menu-icon--closed': !isMenuOpened,
                'Header__menu-icon--opened': isMenuOpened,
              })}
            />
          </button>
        </div>

        <div className="Header__icons">
          <div className="icon">
            <NavLink
              className={({ isActive }) => classNames('icon__link', {
                'icon__link--active': isActive,
              })}
              to="favourites"
            >
              <div className="icon__image icon__image--Favourites">
                {likedProductsCount > 0 && (
                  <div className="icon__counter">
                    <span
                      className="icon__counter-text"
                      style={likedFontSize}
                    >
                      {likedProductsCount < 100 ? likedProductsCount : '99+'}
                    </span>
                  </div>
                )}
              </div>
            </NavLink>
          </div>

          <div className="icon">
            <NavLink
              className={({ isActive }) => classNames('icon__link', {
                'icon__link--active': isActive,
              })}
              to="cart"
            >
              <div className="icon__image icon__image--Cart">
                {cartProductsCount > 0 && (
                  <div className="icon__counter">
                    <span
                      className="icon__counter-text"
                      style={cartFontSize}
                    >
                      {cartProductsCount < 100 ? cartProductsCount : '99+'}
                    </span>
                  </div>
                )}
              </div>
            </NavLink>
          </div>
        </div>
      </header>

      <BurgerMenu
        isMenuOpened={isMenuOpened}
        toggleMenu={toggleMenu}
      />
    </>
  );
};
