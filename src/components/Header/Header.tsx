import cn from 'classnames';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { Logo } from '../Logo';
import './Header.scss';

export const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpened((prevState) => !prevState);
  };

  return (
    <div className="page">
      <div className="page__content">
        <header className="header page__header">
          <div className="header__links">
            <div className="header__logo">
              <Logo height={28} />
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
      </div>
    </div>
  );
};
