import { Link } from 'react-router-dom';
import { HeaderNav } from '../HeaderNav';
import cn from 'classnames';
import './BurgerMenu.scss';
import { FC } from 'react';

interface Props {
  isMenuOpened: boolean;
  setIsMenuOpened: (arg: boolean) => void;
}

export const BurgerMenu: FC<Props> = ({ setIsMenuOpened, isMenuOpened }) => (
  <div className={cn('burger-menu', { 'burger-menu--open': isMenuOpened })}>
    <HeaderNav
      setIsMenuOpened={setIsMenuOpened}
    />
    <div className="burger-menu__icons">
      <div className="icon-block">
        <Link
          title="Favourites"
          className="icon-block__link"
          to="favourites"
          onClick={() => setIsMenuOpened(false)}
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
          onClick={() => setIsMenuOpened(false)}
        >
          <div className="icon-block__icon icon-block__icon--Cart">
          </div>
        </Link>
      </div>
    </div>
  </div >
);
