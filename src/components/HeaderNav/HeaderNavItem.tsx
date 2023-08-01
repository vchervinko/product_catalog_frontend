import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderNav.scss';
import cn from 'classnames';
import { navItems } from '../../utils/constants/navItems';

interface Props {
  setIsMenuOpened: (arg: boolean) => void;
}

export const HeaderNavItem: FC<Props> = ({ setIsMenuOpened }) => (
  <>
    {navItems.map(({ id, path, title }) => (
      <li key={id} className="nav__item">
        <NavLink
          to={path}
          className={({ isActive }) => cn('nav__link', {
            'nav__link--active': isActive
          })}
          onClick={() => setIsMenuOpened(true)}
        >
          {title}
        </NavLink>
      </li>
    ))}
  </>
);
