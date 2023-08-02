import cn from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { navigationItems } from '../../helpers/constants/navigationItems.ts';
import './HeaderNav.scss';

export const HeaderNav: FC = () => (
  <nav className="nav">
    <ul className="nav__list">
      {navigationItems.map(({ id, path, title }) => (
        <li key={id} className="nav__item">
          <NavLink
            to={path}
            className={({ isActive }) => cn('nav__link', {
              'nav__link--active': isActive
            })}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
