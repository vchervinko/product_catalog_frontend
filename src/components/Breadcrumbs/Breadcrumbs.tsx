import { useLocation } from 'react-router';
import './Breadcrumbs.scss';
import { Link } from 'react-router-dom';
import { FC } from 'react';

export const Breadcrumbs: FC = () => {
  const {pathname} = useLocation();

  return (
    <>
      <Link to={'/'}>
        home
      </Link>
      <p>{pathname}</p>
    </>
  );
};
