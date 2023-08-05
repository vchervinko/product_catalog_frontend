import classNames from 'classnames';
import { FC } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './Breadcrumbs.scss';

export const Breadcrumbs: FC = () => {
  const { pathname, state } = useLocation();

  const [category] = pathname.split('/').filter(Boolean);

  return (
    <div className="Breadcrumbs">
      <Link className="Breadcrumbs__home" to="/" />

      <i className="Breadcrumbs__arrow" />

      <Link
        className={classNames('Breadcrumbs__crumb', {
          'Breadcrumbs__crumb--active': Boolean(state),
          'Breadcrumbs__crumb--disabled': !state,
        })}
        to={`/${category}`}
      >
        {category}
      </Link>

      {state && (
        <>
          <div className="Breadcrumbs__arrow" />

          <div className="Breadcrumbs__crumb">
            {state.productName}
          </div>
        </>
      )}
    </div>
  );
};
