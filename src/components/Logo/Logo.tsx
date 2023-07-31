import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/NiceGadgetsLogo.svg';
import './Logo.scss';

interface Props {
  height: number;
}

export const Logo: FC<Props> = ({ height }) => (
  <Link to="/" className="Logo">
    <img
      className="Logo__image"
      style={{ height }}
      src={logo}
      alt="Nice Gadgets logo"
    />
  </Link>
);
