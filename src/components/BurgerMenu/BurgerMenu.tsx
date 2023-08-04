import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';
import { getFontSize } from '../../helpers/getFontSize';
import '../../styles/icon.scss';
import { Navigation } from '../Navigation';
import './BurgerMenu.scss';

interface Props {
  isMenuOpened: boolean;
  toggleMenu: (status?: boolean) => void;
}

export const BurgerMenu: FC<Props> = ({ isMenuOpened, toggleMenu }) => {
  const { likedProductsCount, cartProductsCount } = useProductsContext();

  const likedFontSize = getFontSize(likedProductsCount);
  const cartFontSize = getFontSize(cartProductsCount);

  return (
    <nav
      className={classNames('BurgerMenu', {
        'BurgerMenu--opened': isMenuOpened,
      })}
    >
      <Navigation toggleMenu={toggleMenu} />
      <div className="BurgerMenu__icons">
        <div className="icon">
          <NavLink
            className="icon__link"
            to="favourites"
            onClick={() => toggleMenu(false)}
          >
            <div className="icon__image icon__image--Favourites">
              {likedProductsCount > 0 && (
                <div className="icon__counter">
                  <span
                    className="icon__counter-text"
                    style={likedFontSize}
                  >
                    {likedProductsCount}
                  </span>
                </div>
              )}
            </div>
          </NavLink>
        </div>

        <div className="icon">
          <NavLink
            className="icon__link"
            to="cart"
            onClick={() => toggleMenu(false)}
          >
            <div className="icon__image icon__image--Cart">
              {cartProductsCount > 0 && (
                <div className="icon__counter">
                  <span
                    className="icon__counter-text"
                    style={cartFontSize}
                  >
                    {cartProductsCount}
                  </span>
                </div>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
