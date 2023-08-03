import { FC } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './Breadcrumbs.scss';

export const Breadcrumbs: FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Link to="/">
        Home
      </Link>
      <p>{pathname}</p>
    </>
  );
};
