import { FC } from 'react';
import './NotFoundPage.scss';
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <h2 className="error-page__header">
          404
        </h2>
        <h4 className="error-page__subtitle">
            Oops! Page not found
        </h4>
        <p className="error-page__description">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="error-page__button">
          <Link className="error-page__link" to ="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
