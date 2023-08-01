import cn from 'classnames';
import { useState, FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { Logo } from '../Logo';
import './Header.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuToggle = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      setIsMenuOpened((prevState) => !prevState);
    },
    [],
  );

  return (
        <>
      <header className="header">
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
            <HeaderNav
              setIsMenuOpened={setIsMenuOpened}
            />
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
              className="icon-block__link icon-block__link--active"
              to="favourites"
            >
              <div className="icon-block__icon icon-block__icon--Favourites">
              </div>
            </Link>
          </div>
          <div className="icon-block">
            <Link
              title="Cart"
              className="icon-block__link"
              to="cart"
            >
              <div className="icon-block__icon icon-block__icon--Cart">
              </div>
            </Link>
          </div>
        </div>
      </header>
      <BurgerMenu
        setIsMenuOpened={setIsMenuOpened}
        isMenuOpened={isMenuOpened}
      />
    </>
  );
};
