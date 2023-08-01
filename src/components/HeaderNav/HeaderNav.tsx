import { FC } from 'react';
import './HeaderNav.scss';
import { HeaderNavItem } from './HeaderNavItem';

interface Props {
  setIsMenuOpened: (arg: boolean) => void;
}

export const HeaderNav: FC<Props> = ({ setIsMenuOpened }) => (
  <nav className="nav">
    <ul className="nav__list">
      <HeaderNavItem setIsMenuOpened={setIsMenuOpened} />
    </ul>
  </nav>
);
