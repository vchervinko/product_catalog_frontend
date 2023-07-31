import { FC } from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
  return (
    <div id="error-page">
      <div className="container">
        <h2 className="header" data-text="404">
          404
        </h2>
        <h4>
            Opps! Page not found
        </h4>
        <p>
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="button">
          <Link to ="/">return home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
